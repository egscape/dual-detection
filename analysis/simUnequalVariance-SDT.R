# simulate UV-SDT model for dual decision task
rm(list=ls())
setwd("C:/Users/ethan/Desktop/data")

# -------------
# parameters
d_prime <- 1
sigma_S <- 2 # SD of signal distribution; if you set this =1 you have equal variance SDT
N_trials <- 2e4 # number of simulated trials

# -------------
# helper functions

# calculate response
UVSDT_choice <- function(S,d_prime,sigma_S,alpha=0.5){
  N <- length(S)
  if(length(alpha)==1){
    alpha <- rep(alpha, N)
  }
  is1 <- rnorm(N, mean=S*d_prime, sd=(S*(sigma_S-1)+1))
  LLR <- log((alpha*dnorm(is1,mean=d_prime,sd=sigma_S))/((1-alpha)*dnorm(is1,mean=0,sd=1)))
  resp <- ifelse(LLR>=0,1,0)
  return(list(resp=resp, is1=is1, LLR=LLR))
}

# calculate confidence
confidenceSDT1 <- function(x,resp,dp=d_prime, sigma_S,alpha=0.5){
  conf <- ifelse(
    resp==1,
    dnorm(x,mean=dp,sd=sigma_S)/(dnorm(x,mean=dp,sd=sigma_S)+dnorm(x,mean=0,sd=1)),
    dnorm(x,mean=0,sd=1)/(dnorm(x,mean=dp,sd=sigma_S)+dnorm(x,mean=0,sd=1))
  )
  return(conf)
}

# function that run simulated trials
simUV_SDT <- function(S1, d_prime, sigma_S){
  N <- length(S1)
  S2 <- rep(NA,N)
  
  out1 <- UVSDT_choice(S1,d_prime,sigma_S,alpha=0.5)
  conf1 <- confidenceSDT1(out1$is1, out1$resp, dp=d_prime, sigma_S, alpha=0.5)
  
  S2 <- ifelse(S1==out1$resp,1,0)
  out2 <- UVSDT_choice(S2,d_prime,sigma_S,alpha=conf1)
  
  # compile output into dataframe
  d <- data.frame(
    sp_1 = S1,
    rp_1 = out1$resp,
    acc_1 = S2,
    is_1 = out1$is1,
    conf_1 = conf1,
    LLR_1 = out1$LLR,
    sp_2 = S2,
    rp_2 = out2$resp,
    acc_2 = ifelse(S2==out2$resp,1,0),
    is_2 = out2$is1,
    LLR_2 = out2$LLR,
    conf_2 = confidenceSDT1(out2$is1, out2$resp, dp=d_prime, sigma_S, alpha=conf1)
  )
  return(d)
}

# -------------
# run simulation
S1 <- rep(c(0,1),N_trials/2)
d <- simUV_SDT(S1, d_prime, sigma_S)

# -------------
# check results

# the UV-SDT model predict a difference in accuracy at decision 2 depending on whether 
# the first response was "present" or "absent"
tapply(d$acc_2, d$rp_1, mean)

# use a GLM to estimate SDT parameters
# we estimate the parameters of equal-variance SDT to compare the result 
# to what we obtained on participants data
m2 <- glm(rp_2 ~ sp_2 + rp_1, family=binomial(probit), d)
summary(m2)
coef(m2)

# This is the estimated d-prime
coef(m2)[2]

# criterion after target absent response
-coef(m2)[1]

# mean criterion after target present response
-(coef(m2)[1]+coef(m2)[3])

# make a plot to represent the parameters of the SDT
x <- seq(-4, 4, length.out = 500)
pN <- dnorm(x, mean=0,sd=1)
pY <- dnorm(x, mean=coef(m2)[2],sd=1)

# average accuracy of decision 2
mean_acc_2 <- mean(d$acc_2)

plot(x, mean_acc_2*pY, type="l", col="black",ylab="density",main="simulated UV-SDT (13.5)")
lines(x, (1-mean_acc_2)*pN, type="l", col="grey")

abline(v= -coef(m2)[1], col="red")
abline(v= -(coef(m2)[1]+coef(m2)[3]), col="blue")

legend("topleft",c("after target present","after target absent"),col=c("blue","red"),lwd=1,bty="n")







