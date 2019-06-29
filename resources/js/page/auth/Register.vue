<template>
    <div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>

                        <b-alert v-model="isError" variant="danger" dismissible>
                            {{ user.error }}
                        </b-alert>

                        <b-alert v-model="isSuccess" variant="success" dismissible>
                            {{ user.success }}
                        </b-alert>

                        <form class="user" @submit.prevent="register()">
                            <div class="form-group">
                                <input
                                type="text"
                                v-model="user.name"
                                class="form-control form-control-user"
                                placeholder="User Name"
                                :class="{ 'is-invalid': submitted && $v.user.name.$error }">
                                <div v-if="submitted && $v.user.name.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.name.required">Bạn chưa nhập username</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <input
                                type="email"
                                v-model="user.email"
                                class="form-control form-control-user"
                                placeholder="Email Address"
                                :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                                >
                                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.email.required">Bạn chưa nhập email</span>
                                    <span v-if="!$v.user.email.email">Email không chính xác</span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input
                                    type="password"
                                    v-model="user.password"
                                    class="form-control form-control-user"
                                    placeholder="Password"
                                    :class="{ 'is-invalid': submitted && $v.user.password.$error }">
                                    <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                        <span v-if="!$v.user.password.required">Bạn chưa nhập mật khẩu</span>
                                        <span v-if="!$v.user.password.minLength">Mật khẩu phải có ít nhất 6 ký tự</span>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <input
                                    type="password"
                                    v-model="user.confirmPassword"
                                    class="form-control form-control-user"
                                    placeholder="Repeat Password"
                                    :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }">
                                    <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                                        <span v-if="!$v.user.confirmPassword.required">Bạn chưa nhập xác nhận mật khẩu</span>
                                        <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Xác nhận mật khẩu không chính xác</span>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-user btn-block">
                                Register Account
                            </button>
                            <hr>
                            <a href="index.html" class="btn btn-google btn-user btn-block">
                                <i class="fab fa-google fa-fw"></i> Register with Google
                            </a>
                            <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                            </a>
                        </form>
                        <hr>
                        <div class="text-center">
                            <a class="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                        <div class="text-center">
                            <a style="cursor: pointer;" class="small" @click="signIn()" >Already have an account? Login!</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { register } from '../../api/user';
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { BAlert, BButton } from 'bootstrap-vue';

export default {
    name: 'Signup',
    components: {
        BAlert,
        BButton
    },
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                error: '',
                success: ''
            },
            submitted: false,
            isLoading: false,
            isError: false,
            isSuccess: false
        }
    },
    validations: {
        user: {
            name: { required },
            email: { required, email },
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAsPassword: sameAs('password') }
        }
    },
    methods: {
        async register()
        {
            this.isLoading = true;
            this.submitted = true;

            this.$v.$touch();
            if(this.$v.$invalid)
            {
                return
            }

            await register(this.user)
            .then((response) => {
                this.isSuccess = true;
                this.user.success = response.msg;
            })
            .catch((error) => {
                console.log(error);
                this.isError = true;
                this.user.error = 'Đăng ký không thành công';
            });

            this.isLoading = false;
        },
        signIn()
        {
            this.$router.push({ name: 'login' });
        }
    },
    mounted() {
        document.body.classList.add('bg-gradient-primary');
    }
}
</script>
<style scoped>
    .bg-register-image
    {
        background: url(https://i.pinimg.com/originals/63/c9/b2/63c9b22ecffd9504240b04510b586230.jpg);
    }
</style>


