getAllEmployee()

function saveEmployee(){
    let name = $('#text-input-2').val();
    let address = $('#text-input-3').val();
    let mNumber = $('#text-input-4').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/saveEmployee",
        async:true,
        data:JSON.stringify({
            "empID":"",
            "empName": name,
            "empAddress": address,
            "empMNumber": mNumber
        }),
        success: function (data){
            alert('Saved!')
            getAllEmployee()
        },
        error: function (xhr, exception){
            alert('Error!')
        }
    })
}

function updateEmployee(){
    let empId = $('#text-input-1').val();
    let name = $('#text-input-2').val();
    let address = $('#text-input-3').val();
    let mNumber = $('#text-input-4').val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/updateEmployee",
        async:true,
        data:JSON.stringify({
            "empID":empId,
            "empName": name,
            "empAddress": address,
            "empMNumber": mNumber
        }),
        success: function (data){
            alert('Updated!')
            getAllEmployee()
        },
        error: function (xhr, exception){
            alert('Error!')
        }
    })
}

function deleteEmployee(){
    let empId = $('#text-input-1').val();

    $.ajax({
        method:"DELETE",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/employee/deleteEmployee/"+empId,
        async:true,
        success: function (data){
            alert('Deleted!')
            getAllEmployee()
        },
        error: function (xhr, exception){
            alert('Error!')
        }
    })
}

function getAllEmployee(){

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/employee/getAllEmployees",
        async:true,
        success: function (data){
            if (data.code==="00"){
                $('#empTable').empty();
                for (let emp of data.content){
                    let empId=emp.empID
                    let name=emp.empName
                    let address=emp.empAddress
                    let mNumber=emp.empMNumber

                    var row= `<tr><td>${empId}</td><td>${name}</td><td>${address}</td><td>${mNumber}</td></tr>`;
                    $('#empTable').append(row);
                }
            }
        },
        error: function (xhr, exception){
            alert('Error!')
        }
    })
}

$(document).ready(function () {
    $(document).on('click', '#empTable tr', function () {
        var col0= $(this).find('td:eq(0)').text();
        var col1= $(this).find('td:eq(1)').text();
        var col2= $(this).find('td:eq(2)').text();
        var col3= $(this).find('td:eq(3)').text();

        $('#text-input-1').val(col0);
        $('#text-input-2').val(col1);
        $('#text-input-3').val(col2);
        $('#text-input-4').val(col3);

    })
})