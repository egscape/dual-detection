# clear workpspace
rm(list=ls())
setwd("C:/Users/ethan/Desktop/data")
# function that transform dataset into long format
format_individual_data <- function(d){
  
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
  
  # 
  d2 <- data.frame(d2)
  return(d2)
}
filenames <- dir("C:/Users/ethan/Desktop/data/") # change this to folder containing pavlovia data
#filenames <- filenames[nchar(filenames)>40]

# loop
d_all <- {}
for(i in 1:length(filenames)){
  d <- read.table(paste("C:/Users/ethan/Desktop/data/",filenames[i],sep=""), 
                  header=T,sep=",")
  if(nrow(d)%%2!=0){
    d <- d[-nrow(d),]
  }
  d2 <- format_individual_data(d)
  d2$ID <- paste("sj",i,sep="")
  
  cat("\n\n\nsubject: ",i,"\n")
  str(d2)
  
  d_all <- rbind(d_all, d2)
}
str(d_all)

# exclude sj7
# d_all <- d_all[which(d_all$ID!="sj7"),]

# transform from long to wide - useful for some plots/analyses
d2_1 <- d_all[d_all$decision==1,c("sp","rp","acc","RT","img_path","contrast")]
d2_2 <- d_all[d_all$decision==2,c("sp","rp","acc","RT","img_path","contrast")]
d2_info <- d_all[d_all$decision==1, c("ID","date","trial_number")]
colnames(d2_1) <- paste(colnames(d2_1),"1",sep="_")
colnames(d2_2) <- paste(colnames(d2_2),"2",sep="_")
d3 <- cbind(d2_info, d2_1, d2_2)
rm(d2_1, d2_2, d2_info)


## plots
dag <- aggregate(cbind(acc, rp, RT) ~ decision + ID, d_all, mean)

dag2 <- aggregate(cbind(acc_1,acc_2, rp_1,rp_2, RT_1, RT_2) ~ ID, d3, mean)

#scatterplot accuracy
par(mfrow=c(1,3))
with(dag2, plot(acc_1,acc_2, main="Accuracy", xlab="first decision", ylab="second decision",xlim=c(0.6, 0.9),ylim=c(0.6, 0.9)))
abline(a=0,b=1,lty=2)

with(dag2, plot(RT_1,RT_2, main="Response time", xlab="first decision", ylab="second decision",xlim=c(0.19, 1.1),ylim=c(0.19, 1.1)))
abline(a=0,b=1,lty=2)
with(dag2, plot(rp_1,rp_2,main="Response", xlab="first decision", ylab="second decision",xlim=c(0.3, 0.9),ylim=c(0.3, 0.9)))
abline(a=0,b=1,lty=2)

with(dag2, plot(rp_1,acc_2,main="", xlab="response in first decision", ylab="accuracy in second decision",))
abline(a=0,b=1,lty=2)

with(dag2, plot(rp_1, RT_2,main="", xlab="response in first decision", ylab="accuracy in second decision",))
abline(a=0,b=1,lty=2)

par(mfrow=c(1,3))
with(dag2, plot(acc_1,acc_2,xlim=c(0.5, 0.9),ylim=c(0.5, 0.9)))
abline(a=0,b=1,lty=2)
with(dag2, plot(RT_1,RT_2,xlim=c(0.10, 1.1),ylim=c(0.10, 1.1)))
abline(a=0,b=1,lty=2)
with(dag2, plot(rp_1,rp_2,xlim=c(0.2, 0.9),ylim=c(0.2, 0.9)))
abline(a=0,b=1,lty=2)


## preliminary analyses 
library(lme4)
d_all$d2_dummy <- ifelse(d_all$decision==2,1,0)

# accuracy
m1 <- lmList(acc ~ d2_dummy | ID, family=binomial(logit), d_all)
summary(m1)
coef(m1)

# response
m2 <- lmList(rp ~ d2_dummy | ID, family=binomial(logit), d_all)
summary(m2)
coef(m2)

t.test(coef(m1)[,2]) # t-test on log-odds for accuracy
hist(exp(coef(m1)[,2]))

t.test(coef(m2)[,2]) # t-test on log-odds for response

m1 <- glmer(acc ~ d2_dummy + (d2_dummy || ID), family=binomial(logit), d_all)
summary(m1)


m0 <- lmList(acc_2 ~ rp_1 | ID, family=binomial(logit), d3)
coef(m0)
t.test(coef(m0)[,2]) #t-test on log-odds for accuracy in second decision, based on response in first decision






