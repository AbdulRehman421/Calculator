let hamberg = document.querySelector('.hamberg')
hamberg.addEventListener('click', (e) => {
    document.querySelector('.tesla_products_dashboard').style.display = 'flex';
    hamberg.style.display = 'none';
    document.querySelector('.close_hamberg').style.display = 'block';
    
})

document.querySelector('.close_hamberg').addEventListener('click', (e) => {
    document.querySelector('.tesla_products_dashboard').style.display = 'none';
    document.querySelector('.close_hamberg').style.display = 'none';
    hamberg.style.display = 'block';
})