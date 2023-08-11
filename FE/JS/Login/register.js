function showFormRegister () {
    let str =`
<legend> Đăng kí </legend>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Tên đăng nhập </label>
    <input type="text" class="form-control" id="username" required>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"> Mật khẩu </label>
    <input type="password" class="form-control" id="password" required>
  </div>
  <button onclick="show()" class="btn btn-primary"> Trở về </button>
  <button onclick="submitRegister()" class="btn btn-primary"> Đăng kí </button>`
    document.getElementById("display").innerHTML = str
}

async function submitRegister() {
    let data = {
        username: document.getElementById('username').value.trim(),
        password: document.getElementById('password').value.trim()
    }
    if (data.username === '' || data.password === '') {
        alert("Vui lòng nhập đủ!");
        return;
    }
    else {
        try {
            const res = await axios.post('http://localhost:3000/register', data);
            const token = res.data;

            if (typeof token === 'string') {
                const errorMessage = token.match(/'(.*?)'/);
                const accountName = errorMessage ? errorMessage[1] : 'unknown';
                alert(`Tài khoản '${accountName}' đã có người sử dụng`);
            }
            else {
                showFormLogin();
                alert("Đăng kí thành công!")
            }
        }
        catch (error) {
            console.error(error)
        }
    }

}