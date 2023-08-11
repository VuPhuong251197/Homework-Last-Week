function show() {
    let str = `
    <button onclick="showFormRegister()" class="btn btn-primary"> Đăng kí </button>
    <button onclick="showFormLogin()" class="btn btn-primary"> Đăng nhập </button>`
    document.getElementById('display').innerHTML = str
}