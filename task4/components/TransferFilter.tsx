import React, { useState } from 'react'

const TransferFilter = () => {
        const [priceValue, setPriceValue] = useState<number>(0);
    
  return (
    <>
    <div>
        <label className="font-medium">Araç Türü:</label>
        <select className="w-full mt-1 p-2 border rounded">
            <option value="all">Hepsi</option>
            <option value="car">Araba</option>
            <option value="bike">Bisiklet</option>
        </select>
    </div>
    <div>
        <label className="font-medium">Fiyat Aralığı:</label>
        <div className="flex items-center">
            <input
                type="range"
                min="0"
                max="500"
                value={priceValue}
                onChange={(e) => setPriceValue(Number(e.target.value))}
                className="w-full"
            />
            <span className="ml-2">{priceValue}₺</span>
        </div>
    </div>
</>
  )
}

export default TransferFilter
