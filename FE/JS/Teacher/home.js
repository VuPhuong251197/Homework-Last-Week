function loadHome() {
    axios.get(API_URL).then((res) => {
        let str = `<table class="table">`
        let data = res.data
        str += `<h3> Danh sách thông tin giáo viên </h3> <button onclick="ShowFromAdd()">Thêm giáo viên </button> <button onclick="showFormLogin()"> Đăng xuất </button> <hr>` +
            `<thead>
                <tr>
                    <th scope="col"> Tên giáo viên </th>     
                    <th scope="col"> Tuổi giáo viên </th>      
                    <th scope="col"> Lương giáo viên </th>     
                    <th scope="col"> Chọn chức năng </th>   
                    <th scope="col"> Chọn chức năng </th>   
                </tr> 
            </thead>`
        data.map(item => {
            str += `
  <tbody>
    <tr>
      <td> ${item.name}</td>
      <td> ${item.age}</td>
      <td> ${item.salary} </td>
      <td><button onclick="deleteTeacher(${item.id})" class="btn btn-danger"> Xóa </button></td>
      <td><button onclick="showFormEdit(${item.id})" class="btn btn-primary"> Sửa </button></td>
    </tr>
  </tbody>`
        })
        str += `</table>`;
        document.getElementById("display").innerHTML = str
    })
}