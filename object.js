const students = {
    name: 'sagor Alam',
    id: 191 - 15 - 2367,
    address: 'Tripur,pirgachha,Rangpur',
    isSingle: true,
    act:function(){
        console.log('sagor alom');
    },
    movies: [{ name: 'No 1', year: 2018 }, { name: 'Kabila', year: 2020 }, { name: 'Beiman Bijuri Akater sanu', year: 2023 }],
    friends: ['Nahid', 'Raton', 'Sazzad', 'Tamim', 'Emon', 'Rony', 'Kamrul', 'Naeem'],
    car: {
        brand: 'tesla',
        price: 23000000,
        made: 2023,
        company: 'tesla',
        manufacturer: {
            name: 'tesla',
            company: 'Elon mask',
            country: 'USA'
        }

    },


}
// console.log(students.movies);
students.act();
console.log(students.act);
