<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Simple Validation Vue</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
</head>
<body>
    <div class="container" id="dw">
        <div class="row" style="padding-top: 20px">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-header">Select Form</div>
                    <div class="card-body">
                        <div class="form-group">
                            <input type="radio"  value="0" v-model="type"> Daftar
                        </div>
                        <div class="form-group">
                            <input type="radio" v-model="type" value="1" > Login
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6" v-if="type">
                <div class="card">
                    <div class="card-header">{{ changeTitle }}</div>
                    <div class="card-body">
                        <div v-if="type == 0">
                            <div class="form-group">
                                <label for="">Nama Lengkap</label>
                                <input type="text" class="form-control" :class="{ 'is-invalid': valName }" v-model="name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="email" class="form-control" :class="{ 'is-invalid': valEmail }" v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input type="password" class="form-control" :class="{ 'is-invalid': valPass }" v-model="password">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary btn-sm">{{ changeTitle }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
    <script>
        new Vue({
            el: '#dw',
            data: {
                type: '',
                name: '',
                email: '',
                password: ''
            },
            methods: {
                resetForm() {
                    this.name = ''
                    this.email = ''
                    this.password = ''
                }
            },
            computed: {
                changeTitle() {
                    this.resetForm()
                    return this.type == 0 ? 'Daftar':'Login'
                },
                valName() {
                    if (this.name.length === 0 || this.name.length > 50) {
                        return true;
                    } 
                    return false;
                },
                valEmail() {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (re.test(this.email)) {
                        return false;
                    }
                    return true;
                },
                valPass() {
                    if (this.password.length < 6) {
                        return true;
                    }
                    return false;
                }
            }
        })
    </script>
</body>
</html>