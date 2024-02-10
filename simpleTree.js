



//  craeted simple tress  in javascript 
class node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }

}



class bts_node{
    constructor(){
       this.root=null;
    }
    insert(data){


        newnode=new node(data)

        if(!this.root){
            this.root=newnode;
        }
        else{
            this.insertvalue(this.root,data)
        }
    }

    insertvalue(node,newnode){

        if(newnode.data<node.data){
            if(node.left===null){
                node.left=newnode
            }
            else{
                this.insertvalue(node.left,newnode)
            }
        }


        else{
            if(node.right===null){
                node.right=newnode;
            }

            else{
                this.insertvalue(this.right,newnode)
            }
        }

    }


    inorder(node,callback){
        if(node!=null){
            this.inorder(node.left,callback);
            callback(node.data);
            this.inorder(node.right,callback);
        }
    }

}




const bst=new bts_node();

bst.insert(10)
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);

const result=[]
bst.inorderTraversal(bst.root, (data) => result.push(data));
console.log(result)




