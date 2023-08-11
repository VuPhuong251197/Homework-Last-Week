function showFormLogin() {
    let str =`
<legend> Đăng nhập </legend>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Tên đăng nhập </label>
    <input type="text" class="form-control" id="username" required>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"> Mật khẩu </label>
    <input type="password" class="form-control" id="password" required>
  </div>
  <button onclick="show()" class="btn btn-primary"> Trở về </button>
  <button onclick="submitLogin()" class="btn btn-primary"> Đăng nhập </button>`
    document.getElementById('display').innerHTML = str
}

async function submitLogin(){
    let data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };

    if (data.username === '' || data.password === '') {
        alert("Vui lòng nhập đủ!");
        return;
    }
    else {
        try {
            const res = await axios.post('http://localhost:3000/login', data);
            const token = res.data;

            if (token == 'User does not exist' || token == 'Password is wrong' ) {
                alert("Sai tên đăng nhập hoặc mật khẩu!");
                return;
            } else {
                alert("Đăng nhập thành công");
                loadHome()
            }
    }
    catch (error) {
        console.error(error)
        }
    }
}