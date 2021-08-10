rm(list=ls())
setwd("C:/Users/ethan/Desktop/data")
library(ggplot2)

dL <- read.csv("C:/Users/ethan/Desktop/data_long.csv")
dW <- read.csv("C:/Users/ethan/Desktop/data_wide.csv")

# ------------------------------------------------- # 
# sanity check performance 
dW$block <- as.numeric(cut(dW$trial_number, breaks=seq(0,250,10), labels=1:25))
dL$block <- as.numeric(cut(dL$trial_number, breaks=seq(0,250,10), labels=1:25))
block1 <- with(dW[dW$trial_number<=10,], tapply(acc_1, ID, mean))
dag <- aggregate(cbind(acc_1,contrast_1) ~ block + ID, dW, mean)

ggplot(dag, aes(x=block,y=acc_1,group=ID,color=ID))+geom_line()

tapply(dag$acc_1, dag$ID, mean)

# subject sj3 is at chance
# subject sj38 is also quite bad,

dL <- dL[which(dL$ID!="sj3"),]
dL <- dL[which(dL$ID!="sj38"),]
dW <- dW[which(dW$ID!="sj3"),]
dW <- dW[which(dW$ID!="sj38"),]

#
dag <- aggregate(cbind(acc_1,contrast_1) ~ block + ID, dW, mean)
aggregate(cbind(acc_1,contrast_1) ~ block, dag, mean)

# remove first 2 blocks
#dL <- dL[which(dL$block>5),]
#dW <- dW[which(dW$block>5),]
str(dL)
str(dW)


dag <- aggregate(cbind(acc_1,acc_2) ~ ID, dW, mean)

# exclude everyone with acc < 0.6 in any of the 2 decisions
dL <- dL[which(dL$ID!="sj11"),]
dW <- dW[which(dW$ID!="sj11"),]


# ------------------------------------------------- # 
# explorative plots
## plots
dag <- aggregate(cbind(acc, rp, RT) ~ decision + ID, dL, mean)

dag2 <- aggregate(cbind(acc_1,acc_2, rp_1,rp_2, RT_1, RT_2) ~ ID, dW, mean)

#scatterplot accuracy
par(mfrow=c(1,3))
with(dag2, plot(acc_1,acc_2, main="Accuracy", xlab="first decision", ylab="second decision",xlim=c(0.70, 0.9),ylim=c(0.70, 0.9)))
abline(a=0,b=1,lty=2)

with(dag2, plot(RT_1,RT_2, main="Response time", xlab="first decision", ylab="second decision",xlim=c(0, 1.2),ylim=c(0, 1.2)))
abline(a=0,b=1,lty=2)
with(dag2, plot(rp_1,rp_2,main="Type of response", xlab="first decision", ylab="second decision",xlim=c(0.25, 0.9),ylim=c(0.5, 0.9)))
abline(a=0,b=1,lty=2)

with(dag2, plot(rp_1,RT_2,main="", xlab="type of response in first decision", ylab="reaction time in second decision",))
abline(a=0,b=1,lty=2)

#more pretty plots
ggplot(dag2, aes(x = acc_1, y = acc_2)) + geom_point(size=2) + ggtitle(label = 'Accuracy') + theme(plot.title = element_text(hjust = 0.5), axis.title.x = element_text(color="blue", size=14, face="bold")) +  
 xlab("p(correct), first decision") + ylab("p(correct), second decision") + theme_bw() + geom_abline(intercept=0,slope=1, lty=2) + coord_cartesian(xlim=c(0.6, 0.92),ylim=c(0.6, 0.92)) 

ggplot(dag2, aes(x = RT_1, y = RT_2)) + geom_point(size=2) + geom_abline(intercept=0,slope=1, lty=2) + ggtitle(label = 'Response time') + theme(plot.title = element_text(hjust = 0.5))+
 xlab("first decision (s)") + ylab("second decision (s)") + theme_bw() + coord_cartesian(xlim=c(0, 1.6),ylim=c(0, 1.6))

ggplot(dag2, aes(x = rp_1, y = rp_2)) + geom_point(size=2) + geom_abline(intercept=0,slope=1, lty=2) + ggtitle(label = 'Type of response') + 
 xlab("first decision") + ylab("second decision") + theme_bw()+ coord_cartesian(xlim=c(0.3, 0.9),ylim=c(0.3, 0.9))

ggplot(dag2, aes(x = rp_1, y = RT_2)) + geom_point(size=2) + geom_smooth(method="lm") + ggtitle(label = '') + 
  xlab("type of response in first decision") + ylab(" reaction time in second decision (s)") + theme_bw()

ggplot(dag2, aes(x = rp_1, y = acc_2)) + geom_point(size=2) + geom_smooth(method="lm") + ggtitle(label = '') + 
  xlab("type of response in first decision") + ylab(" accuracy in the second decision") + theme_bw()


#proportion of participants with higher accuracy in decision 2 compared to decision 1
dag <- aggregate(cbind(acc_1,acc_2) ~ ID, dW, mean)
sum(with(dag, acc_2> acc_1))
mean(with(dag, acc_2> acc_1))


# new plot
library(devtools)
library(mlisi)

nice_theme <- theme_bw()+theme(text=element_text(family="Helvetica",size=9),panel.border=element_blank(),strip.background = element_rect(fill="white",color="white",size=0),strip.text=element_text(size=rel(0.8)),panel.grid.major.x=element_blank(),panel.grid.major.y=element_blank(),panel.grid.minor=element_blank(),axis.line.x=element_line(size=.4),axis.line.y=element_line(size=.4),axis.text.x=element_text(size=7,color="black"),axis.text.y=element_text(size=7,color="black"),axis.line=element_line(size=.4), axis.ticks=element_line(color="black"))
str(dL)
d_plot <- data.frame(condition="1st",
                     acc = dW$acc_1,
                     sp = dW$sp_1,
                     rp = dW$rp_1,
                     ID=dW$ID)
d_plot_2 <- data.frame(condition=ifelse(dW$rp_1==1,"target\npresent","target\nabsent"),
                       acc = dW$acc_2,
                       sp = dW$sp_2,
                       rp = dW$rp_2,
                       ID=dW$ID)
d_plot <- rbind(d_plot, d_plot_2)
dag <- aggregate(acc ~ condition + ID, d_plot, mean)
dag2 <- aggregate(acc ~ condition, dag, mean)
dag2$se <- aggregate(acc ~ condition, dag, bootMeanSE)$acc/1.2

# -------------------------------------------------------------------------------- # 
## preliminary analyses 
library(lme4)


# ------------- Accuracy decision 1 vs 2 -------------------- # 
# logistic regression to test whether accuracy is better at decision 2
# this run a logistic regression for all participants individually in one go, using the lmList function
dL$d2_dummy <- ifelse(dL$decision==2,1,0)
m1 <- lmList(acc ~ d2_dummy | ID, family=binomial(logit), dL)

par(lwd=1,mar=(c(6, 3, 2, 2) + 0.1),mgp=c(4,0.5,0))

hist(exp(coef(m1)[,2]), breaks=2,xlab=expression(frac("odds correct decision 2","odds correct decision 1")),col="gray",border="white",ylab="N participants",main="")

abline(v=1, lty=2,lwd=2)

# the command for doing it for a single subject would be
m1_single <- glm(acc ~ d2_dummy, family=binomial(logit), dL[dL$ID=="sj1",])
summary(m1_single)
coef(m1_single)

summary(m1)
coef(m1)
mean(exp(coef(m1)[,2])) #exponential of the mean odds-ratio

mean(tapply(dW$acc_1, dW$ID, mean)) # mean accuracy of first decision
sd(tapply(dW$acc_1, dW$ID, mean))# sd across participants of accuracy of first decision
mean(tapply(dW$acc_2, dW$ID, mean)) # mean accuracy of second decision
sd(tapply(dW$acc_2, dW$ID, mean))# sd across participants of accuracy of second decision

t.test(coef(m1)[,2]) # t-test on log-odds 
par(lwd=1,mar=(c(6, 3, 2, 2) + 0.1),mgp=c(4,0.5,0))

hist(exp(coef(m1)[,2]), breaks=2,xlab=expression(frac("odds correct decision 2","odds correct decision 1")),col="gray",border="white",ylab="N participants",main="")
abline(v=1, lty=2,lwd=2) # distribution of odds-ratio (i.e. how many times more likely of being correct is the decision 2 relative to decision 1)
abline(v=1,lty=2, col="black", lwd=2 )


# ------------- Accuracy at decision 2 depending on type of response at decision 1 ------ # 
# accuracy in the second decision, as a function of the type of response in decision 1
m1.2 <- lmList(acc_2 ~ rp_1 | ID, family=binomial(logit), dW)
coef(m1.2)
t.test(coef(m1.2)[,2])

library(BayesFactor)
# Rouder, J. N., Speckman, P. L., Sun, D., Morey, R. D., & Iverson, G. (2009). Bayesian t-tests for accepting and rejecting the null hypothesis. Psychonomic Bulletin & Review, 16, 225-237
1/ttestBF(coef(m1.2)[,2], rscale=1)


# ------------- Response time in decision 1 vs 2 ------------- #
dag1 <- aggregate(cbind(RT_1,RT_2)~ID,dW,mean,trim=0.05/2)
t.test(dag1$RT_1,dag1$RT_2,paired=T)


# ------------- Response time in decision 2 as a function of the type of response in decision 1 ------------- #
dag2 <- aggregate(RT_2~ID+rp_1,dW,mean,trim=0.05/2)
t.test(RT_2~rp_1,dag2,paired=T)

# Frequency of target present in second decision as a function of type of response in first decision
m2 <- lmList(rp_2 ~ sp_2 + rp_1 | ID, family=binomial(logit), dW)
t.test(coef(m2)[,3])

# -------- Equal variance analysis of decision 2 ------- #
# participants have different expectations after target present vs target absent responses at decision 1
# use a GLM to estimate SDT parameters
m2 <- lmList(rp_2 ~ sp_2 + rp_1 | ID, family=binomial(probit), dW)
coef(m2)

# mean d-prime
mean(coef(m2)[,2])
sd(coef(m2)[,2])

# mean criterion after target absent response
mean(-coef(m2)[,1])
optimal_c_rp0 <- 1/mean(coef(m2)[,2]) * log((1-mean(dW$acc_2[dW$rp_1==0]))/mean(dW$acc_2[dW$rp_1==0])) + mean(coef(m2)[,2])/2

# mean c after target absent 
mean(-(coef(m2)[,1]))

# mean criterion after target present response
mean(-(coef(m2)[,1]+coef(m2)[,3]))
optimal_c_rp1 <- 1/mean(coef(m2)[,2]) * log((1-mean(dW$acc_2[dW$rp_1==1]))/mean(dW$acc_2[dW$rp_1==1])) + mean(coef(m2)[,2])/2

t.test(coef(m2)[,3])

# make a plot to represent the parameters of the SDT
x <- seq(-4, 4, length.out = 500)
pN <- dnorm(x, mean=0,sd=1)
pY <- dnorm(x, mean=mean(coef(m2)[,2]),sd=1)

# average accuracy of decision 2
mean_acc_2 <- mean(dW$acc_2)

plot(x, mean_acc_2*pY, type="l", col="black",ylab="density",main="observed data")
lines(x, (1-mean_acc_2)*pN, type="l", col="grey")

abline(v= mean(-coef(m2)[,1]), col="red")
abline(v= mean(-(coef(m2)[,1]+coef(m2)[,3])), col="blue")

legend("topleft",c("after target present","after target absent"),col=c("blue","red"),lwd=1,bty="n")


# --------------
# Simulation of unequal-variance SDT model



# -------------
# modelling data using UV-SDT

library(rethinking)
d <-  dW[dW$ID=="sj1",]

# model <- alist(
#   rp_1 ~ dbinom(1 , p1),
#   rp_2 ~ dbinom(1 , p2),
#   p1 <- pnorm(-d_prime/2, mean= d_prime*sp_1, sd=(sp_1*(sigma_S-1)+1)),
#   p_acc_1 <- 
#   p1 <- pnorm(-d_prime/2, mean= d_prime*sp_1, sd=(sp_1*(sigma_S-1)+1)),
# )








