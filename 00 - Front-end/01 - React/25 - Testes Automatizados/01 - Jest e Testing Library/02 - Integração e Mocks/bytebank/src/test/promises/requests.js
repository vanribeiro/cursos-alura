let timerId = 0;

const mockRequestGetSuccess = (result) => {
    return new Promise((resolve) => timerId = setTimeout(() => {
        resolve({
            data: result
        })
    }, 100))
  }
  
  const mockRequestPostSuccess = () => {
    return new Promise((resolve) => timerId = setTimeout(() => {
        resolve({
            status: 201 
        })
    }, 100))
  }
  
  const mockRequestError = () => {
    return new Promise((_, reject) => timerId = setTimeout(() => {
        reject()
    }, 100))
}


export {
    timerId,
    mockRequestGetSuccess,
    mockRequestPostSuccess,
    mockRequestError
}
  