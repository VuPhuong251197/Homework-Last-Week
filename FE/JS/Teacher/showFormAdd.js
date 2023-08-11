function ShowFromAdd(){
    let str = `<form>
<legend> Thêm thông tin giáo viên </legend>
  <div class="mb-3">
    <label for="name" class="form-label"> Tên giáo viên </label>
    <input type="text" class="form-control" id="name" placeholder="Nhập tên giáo viên">
  </div>
  <div class="mb-3">
    <label for="age" class="form-label"> Tuổi giáo viên </label>
    <input type="text" class="form-control" id="age" placeholder="Nhập tuổi giáo viên">
  </div>
  <div class="mb-3">
    <label for="salary" class="form-label"> Lương giáo viên </label>
    <input type="text" class="form-control" id="salary" placeholder="Nhập lương giáo viên">
  </div>
  <button onclick="loadHome()" type="button" class="btn btn-primary"> Trở về </button>
  <button onclick="save()" type="button" class="btn btn-success"> Xác nhận </button>
</form>`;
    document.getElementById('display').innerHTML = str;
}

function save(){
    let data = {
        name : document.getElementById("name").value,
        age : document.getElementById('age').value,
        salary : document.getElementById('salary').value
    }
    axios.post(API_URL,data).then(res => {
        axios.get(API_URL).then((res)=>{
            loadHome()
        })
    })
}