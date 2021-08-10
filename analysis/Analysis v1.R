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
# subject sj38 is also quite bad

dL <- dL[which(dL$ID!="sj3"),]
dL <- dL[which(dL$ID!="sj38"),]
dW <- dW[which(dW$ID!="sj3"),]
dW <- dW[which(dW$ID!="sj38"),]

#
dag <- aggregate(cbind(acc_1,contrast_1) ~ block + ID, dW, mean)
aggregate(cbind(acc_1,contrast_1) ~ block, dag, mean)

# remove first 2 blocks
dL <- dL[which(dL$block>5),]
dW <- dW[which(dW$block>5),]
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
with(dag2, plot(acc_1,acc_2,xlim=c(0.5, 0.9),ylim=c(0.5, 0.9)))
abline(a=0,b=1,lty=2)
with(dag2, plot(RT_1,RT_2,xlim=c(0.10, 1.1),ylim=c(0.10, 1.1)))
abline(a=0,b=1,lty=2)
with(dag2, plot(rp_1,rp_2,xlim=c(0.2, 0.9),ylim=c(0.2, 0.9)))
abline(a=0,b=1,lty=2)


dag <- aggregate(cbind(acc_1,acc_2) ~ ID, dW, mean)
sum(with(dag, acc_2> acc_1))
mean(with(dag, acc_2> acc_1))

# ------------------------------------------------- # 
## preliminary analyses 
library(lme4)

# logistic regression to test whether accuracy is better at decision 2
# this run a logistic regression for all participants individually in one go, using the lmList function
dL$d2_dummy <- ifelse(dL$decision==2,1,0)
m1 <- lmList(acc ~ d2_dummy | ID, family=binomial(logit), dL)

# the command for doing it for a single subject would be
m1_single <- glm(acc ~ d2_dummy, family=binomial(logit), dL[dL$ID=="sj1",])

summary(m1)
coef(m1)

t.test(coef(m1)[,2]) # t-test on log-odds 
hist(exp(coef(m1)[,2])) # distribution of odds-ratio (i.e. how many times more likely of being correct is the decision 2 relative to decision 1)


# use a GLM to estimate SDT parameters
m2 <- lmList(rp_2 ~ sp_2 + rp_1 | ID, family=binomial(probit), dW)
coef(m2)

# mean d-prime
mean(coef(m2)[,2])

# mean criterion after target absent response
mean(-coef(m2)[,1])

# mean criterion after target present response
mean(-(coef(m2)[,1]+coef(m2)[,3]))
t.test(coef(m2)[,3])

# make a plot to represent the parameters of the SDT
x <- seq(-4, 4, length.out = 500)
pN <- dnorm(x, mean=0,sd=1)
pY <- dnorm(x, mean=mean(coef(m2)[,2]),sd=1)

# average accuracy of decision 2
mean_acc_2 <- mean(dW$acc_2)

plot(x, mean_acc_2*pY, type="l", col="black",ylab="density")
lines(x, (1-mean_acc_2)*pN, type="l", col="grey")

abline(v= mean(-coef(m2)[,1]), col="red")
abline(v= mean(-(coef(m2)[,1]+coef(m2)[,3])), col="blue")

legend("topleft",c("after target present","after target absent"),col=c("blue","red"),lwd=1,bty="n")

