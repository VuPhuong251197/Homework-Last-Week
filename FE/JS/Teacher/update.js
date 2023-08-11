function showFormEdit(id) {
    axios.get(`${API_URL}/${id}`).then((res) => {
        let data = res.data[0];
        document.getElementById("id").value = data.id;
        document.getElementById("name").value = data.name;
        document.getElementById("age").value = data.age;
        document.getElementById("salary").value = data.salary;
    });
    let str =`<form>
<legend> Sửa thông tin giáo viên </legend>
  <div class="mb-3">
    <label for="id" class="form-label"></label>
    <input type="hidden" class="form-control" id="id">
  </div>
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
  <button onclick="edit()" type="button" class="btn btn-success"> Xác nhận </button>
</form>`
    document.getElementById("display").innerHTML = str;
}

function edit() {
    let data = {
        id : document.getElementById("id").value,
        name : document.getElementById("name").value,
        age : document.getElementById('age').value,
        salary : document.getElementById('salary').value
    }
    axios.put(API_URL + '/' + data.id, data).then((res) => {
        alert("Bạn có chắc chắn muốn sửa thông tin giáo viên không?");
        loadHome()
    })
}