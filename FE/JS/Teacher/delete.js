function deleteTeacher(id) {
    alert("Bạn có chắc chắn xóa?")
    axios.delete(API_URL + `/${id}`).then((res) => {
        loadHome()
    })
}