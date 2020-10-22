<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div class="container">
        <router-link to="/" class="navbar-brand">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Todo</router-link>    
                </li>
                <!--<li class="nav-item">
                    <router-link to="/register" class="nav-link">Register</router-link>    
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>    
                </li>-->
            </div>
        </div>
        </div>
    </nav>
    
</template>

<script>

    

    export default{
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped>
    

</style>