#include <iostream>
 #include<string>
using namespace std;
 
int main()
{
    string a="hags@#fhvbfjhvb!kfgjfg*";
    int count=0;
    for (int i = 0 ; i < a.size(); i++)
    {
        if(a[i]>='A'&& a[i]<='Z'||a[i]>='a'&&a[i]<='z')
        {
            count++;
        }
        /* code */
    }
    cout<<count;
    
return 0;
}