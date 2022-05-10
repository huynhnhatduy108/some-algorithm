const cars = ["Saab", "Volvo", "BMW","Mec","Ferrari","Volvo", "Mec","BMW","Toyota", "Huyndai", "Mec" ];
const occ = cars.reduce((acc, current)=>{return {...acc,[current]:(acc[current]||0)+1}},{})

