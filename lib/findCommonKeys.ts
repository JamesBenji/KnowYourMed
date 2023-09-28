const findCommonKeys = (array1: string[], array2: string[]) =>{
    return array1.filter((value)=> array2.includes(value));

  }

export default findCommonKeys;