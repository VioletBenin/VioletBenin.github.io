//借助空节点，一个偷懒的办法（也没有省多少时间）
#include <iostream>
#include <vector>

using namespace std;

typedef int ElemType;

//节点
typedef struct LNode{
ElemType data;
LNode* next;
LNode();
LNode(ElemType);
}LinkNode;

//链表
struct LinkList{
    LNode* head;
    LinkList();
    LinkList(vector<ElemType>);
    void output();
    LinkList* reverse();
};

int main(){
    vector<ElemType> v={1,2,3,4,5,6,7};
    LinkList linklist(v);
    linklist.output();
    system("pause");
    return 0;
}

//节点
LNode::LNode(){
this->next=NULL;
}

LNode::LNode(ElemType i){
this->data=i;
this->next=NULL;
}

//链表
LinkList::LinkList(){
head=NULL;
};

LinkList::LinkList(vector<ElemType> v){
    head=NULL;
    LNode* tailNode; 
    for(ElemType i:v){
        LinkNode* newNode=new LinkNode(i);
        if(head==NULL){
            head=newNode; 
        }else{
            tailNode->next=newNode;
        }
        tailNode=newNode;   
    }
};

void LinkList::output(){
    LinkNode* thisNode=this->head;
    while(thisNode!=NULL){
        cout<<thisNode->data<<" ";
        thisNode=thisNode->next;
    }
}

LinkList* LinkList::reverse(){
    LinkList* verHead;
    LinkNode* head=NULL;
    while(){

    }
    return verHead;
}