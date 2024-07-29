type Product = {
    name:string,
    description:string,
    images:ServerFile[],
    tds:string,
    sds:string,
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