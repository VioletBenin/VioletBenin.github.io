//不借助空节点
//6：49-7：08=20min
#include<iostream>
#include<vector>
using namespace std;

struct node{
    int data;
    node* next;
};

struct linklist{
    node* head;
};

vector<int> a={1,2,3,4,5,6,7};

linklist init(){
    node* head=NULL;
    node *thisNode=head;
    for(int i:a){
        node* newNode=(node*)malloc(sizeof(node));
        newNode->data=i;
        newNode->next=NULL;
        if(thisNode==NULL){
            head=newNode;
            thisNode=head;
        }else{
            thisNode->next=newNode;
            thisNode=thisNode->next;
        } 
    }
    linklist ll;
    ll.head=head;
    return ll;
}

linklist reverse(linklist oriLink){    
    node* oriNode=oriLink.head;
    linklist revLink;
    node* revNode=NULL;
    while(oriNode!=NULL){
        node* thisNode=(node*)malloc(sizeof(node));
        thisNode->data=oriNode->data;
        thisNode->next=revNode;
        revNode=thisNode;
        oriNode=oriNode->next;
        }
        revLink.head=revNode;
        return revLink;
}


void output(linklist oriLink){
    node* oriNode=oriLink.head;

    while(oriNode!=NULL){
        // node* thisNode=(node*)malloc(sizeof(node));
        cout<<oriNode->data<<" ";
        oriNode=oriNode->next;
        }
        cout<<endl;
}



int main(){
linklist ll=init();
output(ll);
linklist ll0=reverse(ll);
 output(ll0);
    system("pause");

return 0;
};