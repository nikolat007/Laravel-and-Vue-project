<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h3 class="mb-3">Login to your account</h3>
                <form>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>