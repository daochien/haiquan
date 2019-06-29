<template>
    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome ChienVuejs!</h1>
                                    </div>
                                    <b-alert v-model="form.isError" variant="danger" dismissible>
                                         {{ form.error }}
                                    </b-alert>
                                    <form class="user" @submit.prevent="SignIn()">
                                        <div class="form-group">
                                            <input
                                            v-model="form.email"
                                            type="email"
                                            class="form-control form-control-user"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..."
                                            :class="{ 'is-invalid': submitted && $v.form.email.$error }">

                                            <div v-if="submitted && $v.form.email.$error" class="invalid-feedback">
                                                <span v-if="!$v.form.email.required">Bạn chưa nhập email</span>
                                                <span v-if="!$v.form.email.email">Email không chính xác</span>
                                            </div>

                                        </div>
                                        <div class="form-group">
                                            <input
                                            v-model="form.password"
                                            type="password"
                                            class="form-control form-control-user"
                                            placeholder="Password"
                                            :class="{ 'is-invalid': submitted && $v.form.password.$error }">
                                            <div v-if="submitted && $v.form.password.$error" class="invalid-feedback">
                                                <span v-if="!$v.form.password.required">Bạn chưa nhập mật khẩu</span>
                                                <span v-if="!$v.form.password.minLength">Mật khẩu phải ít nhất 6 ký tự</span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember Me</label>
                                            </div>
                                        </div>

                                        <b-button variant="primary"  type="submit" class="btn btn-primary btn-user btn-block" :disabled="submitted">
                                            <b-spinner small v-if="loading"></b-spinner>
                                            Login
                                        </b-button>

                                        <hr>
                                        <a href="index.html" class="btn btn-google btn-user btn-block">
                                            <i class="fab fa-google fa-fw"></i> Login with Google
                                        </a>
                                        <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                            <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                        </a>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a @click="SignUp" class="small signup" >Create an Account!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
  import { BAlert, BButton } from 'bootstrap-vue';
  import { required, email, minLength } from "vuelidate/lib/validators";

  export default {
    name: 'FormsPage',
    components: {
        BAlert,
        BButton
    },

    data() {
        return {
            form: {
                email: '',
                password: '',
                error: '',
                isError: false
            },
            submitted: false,
            loading: false,
            redirect: undefined,
        }
    },
    watch: {
        $router: {
            handler: function(route) {
                this.redirect = route.query && route.query.redirect;
            },
            immediate: true
        }
    },
    validations: {
        form: {
            email: { required, email },
            password: { required, minLength: minLength(6) }
        }
    },
    methods: {

        async SignIn()
        {
            this.loading = true;
            this.submitted = true;
            this.$v.$touch();
            if(this.$v.$invalid)
            {
                return
            }

            await this.$store.dispatch('user/login', this.form)
            .then((response) => {
                this.$router.push({name: 'app'});
            })
            .catch((error) => {
                this.form.isError = true;
                this.form.error = 'Thông tin đăng nhập không chính xác';
            });

            this.loading = false;
        },

        SignUp()
        {
            this.$router.push({ name: 'signup' });
        }
    },
    mounted() {
        document.body.classList.add('bg-gradient-primary');
    }
  }
</script>
<style scoped>
    .bg-login-image
    {
        background: url(https://editorial.designtaxi.com/news-superhero160414/8.jpg);
    }
    .signup
    {
        color: #4e73df;
        cursor: pointer;
    }
</style>
