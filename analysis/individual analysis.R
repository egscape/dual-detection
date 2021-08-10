# dual-decision-detection // analysis pilot data

rm(list=ls())
setwd("C:/Users/ethan/Desktop/individual data/")
d <- read.table("C:/Users/ethan/Desktop/individual data/Owen Balding _dual-d-detection_2021-03-04_14h32.16.452.csv", header=T,sep=",")

# ----------------------------------------------------------------- #
# we need to put the dataset in a good format for analyzing it
# better to go step by step to avoid mistakes

# create a trial index
d$trial_number <- NA
cont <- 0
for(i in 1:nrow(d)){
  if(!is.na(d$decision_D1[i])){
    cont <- cont+1
  }
  d$trial_number[i] <- cont
}

# pre-allocate the variables in the format that we need them
d2 <- {}
d2$decision <- rep(1:2,nrow(d)/2) # decision order
d2$sp <- rep(NA,nrow(d)) # stim present 1/0 (1 indicats stimulus was present)
d2$rp <- rep(NA,nrow(d)) # resp present 1/0
d2$acc <- rep(NA,nrow(d)) # correct resp 1/0
d2$RT <- rep(NA,nrow(d)) # response time
d2$img_path <- rep(NA,nrow(d)) # path of image
d2$contrast <- rep(NA,nrow(d)) # contrast level
d2$ID <- unique(d$participant)
d2$date <- d$date
d2$trial_number <- d$trial_number

# ## sanity checks ##
# tapply(d$key_resp.corr,d$key_resp.corr,length) # 81% correct D1
# 
# cbind(d$key_resp.corr,d$key_resp.keys, d$Tpath_D1) # double-check accuracy count for D1
# cbind(d$key_resp_corrD1.corr,d$key_resp_corrD1.keys, d$Tpath_D2,d$key_resp.corr) # OK also D2
# cbind(d$key_resp_wrongD1.corr,d$key_resp_wrongD1.keys, d$Tpath_D2,d$key_resp.corr)
# 
# cbind(d$key_resp.corr,d$key_resp.keys, d$Tpath_D1)

# now populate the pre-allocated variables
d1_correct <- NA # logical - was the previous first decision correct?
for(i in 1:nrow(d)){
  
  if(d2$decision[i]==1){
    ss <- d$Tpath_D1[i]
    d2$sp[i] <- ifelse(substr(ss,9,9)=="S",1,0)
    d2$rp[i] <- ifelse(d$key_resp.keys[i]=="s",1,0)
    d2$acc[i] <- d$key_resp.corr[i]
    d2$RT[i] <- d$key_resp.rt[i]
    d2$img_path[i] <- ss
    d2$contrast[i] <- d$contrast_lvl_D1[i]
    
    d1_correct <- ifelse(d2$acc[i]==1,1,0)
    
  }else{
    if(d1_correct==1){
      ss <- d$Tpath_D2[i-1]
      d2$sp[i] <- ifelse(substr(ss,9,9)=="S",1,0)
      d2$rp[i] <- ifelse(d$key_resp_corrD1.keys[i-1]=="s",1,0)
      d2$acc[i] <- d$key_resp_corrD1.corr[i-1]
      d2$RT[i] <- d$key_resp_corrD1.rt[i-1]
      d2$img_path[i] <- ss
      d2$contrast[i] <- d2$contrast[i-1]
      
      d1_correct <- NA
    }else{
      ss <- d$Tpath_D2[i-1]
      d2$sp[i] <- ifelse(substr(ss,9,9)=="S",1,0)
      d2$rp[i] <- ifelse(d$key_resp_wrongD1.keys[i-1]=="s",1,0)
      d2$acc[i] <- d$key_resp_wrongD1.corr[i-1]
      d2$RT[i] <- d$key_resp_wrongD1.rt[i-1]
      d2$img_path[i] <- ss
      d2$contrast[i] <- d2$contrast[i-1]
      
      d1_correct <- NA
    }
  }
}

d2 <- data.frame(d2)
str(d2)
write.table(d2, "C:/Users/ethan/Desktop/individual data/Antoine_dual-d-detection_2021-02-25_19h55.50.843.csv",row.names = F, sep=",")

# transform from long to wide - useful for some plots/analyses
d2_1 <- d2[d2$decision==1,c("sp","rp","acc","RT","img_path","contrast")]
d2_2 <- d2[d2$decision==2,c("sp","rp","acc","RT","img_path","contrast")]
d2_info <- d2[d2$decision==1, c("ID","date","trial_number")]
colnames(d2_1) <- paste(colnames(d2_1),"1",sep="_")
colnames(d2_2) <- paste(colnames(d2_2),"2",sep="_")
d3 <- cbind(d2_info, d2_1, d2_2)
rm(d2_1, d2_2, d2_info)

write.table(d3, "C:/Users/ethan/Desktop/individual data/Antoine_dual-d-detection_2021-02-25_19h55.50.843.csv",row.names = F, sep=",")



