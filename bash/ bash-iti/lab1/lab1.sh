#!/bin/bash
echo "==================Q1 Start==================="
awk -F : '{print $5}' /etc/passwd

echo "==================Q2 Start==================="

awk -F : '{print ">>" ,NR ," -Login:- ",$1," -Full name:- ",$5," -Home Dir:- ",$6}' /etc/passwd

echo "==================Q3 Start==================="

awk -F : '{
    if($3>500){
        print ">>" ,NR ," -Login:- ",$1," -UID:- ",$3," -Full name:- ",$5
    }
}' /etc/passwd

echo "==================Q4 Start==================="
awk -F : '{
    if($3==500){
        print ">>" ,NR ," -Login:- ",$1," -UID:- ",$3," -Full name:- ",$5
    }
}' /etc/passwd

echo "==================Q5 Start==================="
awk -F : '{
    if(NR >=5 && NR <=15 ){
        print ">>" ,NR , $0
    }
}' /etc/passwd

echo "==================Q6 Start==================="
awk ' BEGIN{
	FS=":";
	OFS="XX";
    }
        {
    for(i=1; i<=NF; i++){
	if($i == "lp"){
	$i="MYLP";
	    }	
    }
print $0
}' /etc/passwd

echo "==================Q7 Start==================="
awk 'BEGIN{
	FS=":";
	max=0
}
{
	if($3>max){
	    max=$3
        maxinfo=$0
	}
} END{print "MaxInfo >>> " ,maxinfo} ' /etc/passwd

echo "==================Q8 Start==================="
awk 'BEGIN{
	FS=":";
	sum=0;
}
{
    sum=sum+$3;
}
END {print "SumOFUserIds= ", sum}' /etc/passwd






