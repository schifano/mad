#include <stdio.h> 
#include <unistd.h> 

int main() 
{ 
	int i; 
	for (i=0; i < 8; i=i+2) 
	fork(); 
	return 0; 
} 
