type Product = {
    name:string,
    description:string,
    image?:ServerFile,
    tds:string|File,
    sds:string|File,
    minimum_order:string
    codeNumber:string
    packagingSize:string
    innerBox:string
    outerCarton:string
    category:string
}

type Contact = {
    address:string,
        companyName:string,
        companyWebsite:string,
        country:string,
        email:string,
        mobileNumber:string,
        name:string,
        telNumber:string,
        enquiry:string
        time:number
}

type ServerFile = {
    url:string,
    fileName:string,
    pathName:string
}

type Order={
    customer:{
        name:string,
        businessName:string,
        phone:string,
        address:string,
        email:string
    },
    products:Array<{
        code:string,
        image:string,
        name:string,
        quantity:string
    }>
}

interface ProductOrder {
    productImage: string;
    productName: string;
    productCode: string;
    quantity: number;
    customerName: string;
    email: string;
    phone: string;
    businessName: string;
    address: string;
  }
  

  type News={
    title:string
    date:string
    desc:string
    reload?:Function
    dbRef?:any
  }

  type Service ={
    title:string
    desc:string
    reload?:Function
    dbRef?:any
  }