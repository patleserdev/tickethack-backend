function checkBody(datas,schema)
{
    let isValid = true

    for (const key of schema)
    {
        if(!datas[key] || datas[key] === "")
        {
            isValid = false
        }
    }

    return isValid
}


module.exports= { checkBody }