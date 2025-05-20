import { useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import { useRentedCarsContext } from '../../contexts/RentedCarsContext'
import '../../styles/ProfilePages.css'

function AddCar() {
    const { user } = useAuthContext()
    const { addCar } = useRentedCarsContext()

    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [pricePerDay, setPricePerDay] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    
    const handleFileChange = (e) => {
        const selectedImage = e.target.files[0]  
        if (selectedImage) {
          setImage(selectedImage);  
        }
      }

    const handleAdding = (e) => {
        e.preventDefault()

        if (!brand || !model || !releaseDate || !pricePerDay || !description || !image) {
            alert("Please fill in all fields")
            return
        }

        const carData = {
            id: Date.now(),  
            brand: brand, 
            model: model, 
            releaseDate: releaseDate, 
            pricePerDay: pricePerDay, 
            description: description,
            image,
            ownerEmail: user?.email,
            bookings: []
        }

        addCar(carData)
        
        setBrand("")
        setModel("")
        setReleaseDate("")
        setPricePerDay("")
        setDescription("")
        setImage(null)
        document.getElementById("image-upload").value = ""

        alert("Car successfully added!")
    }

    return (
        <div className="add-car">
            <form className="adding-form" onSubmit={handleAdding}>
                <label htmlFor="image-upload" className="image-upload-label">
                    Upload Car Image
                    <input type="file" id="image-upload" className="image-upload-input" accept="image/*" onChange={handleFileChange}/>
                </label>
                <input type="text" className="adding-brand" placeholder="Car Brand" value={brand} onChange={e => setBrand(e.target.value)} />
                <input type="text" className="adding-model" placeholder="Model" value={model} onChange={e => setModel(e.target.value)} />
                <input type="number" className="adding-release-date" placeholder="Release Date" value={releaseDate} onChange={e => setReleaseDate(e.target.value)} />
                <input type="number" className="adding-price" placeholder="Price Per Day" value={pricePerDay} onChange={e => setPricePerDay(e.target.value)} />
                <input type="text" className="adding-description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddCar