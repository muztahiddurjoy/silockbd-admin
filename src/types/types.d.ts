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