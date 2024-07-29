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
}

type ServerFile = {
    url:string,
    fileName:string,
    pathName:string
}