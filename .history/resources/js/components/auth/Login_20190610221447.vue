<template>
    <section class="form-gradient">
        <mdb-row class="justify-content-center">
            <mdb-col class="col-md-5 col-lg-4 col-sm-8" >
                <mdb-card>
                    <div class="header pt-3 peach-gradient">
                    <mdb-row class="d-flex justify-content-center">
                        <h3 class="white-text mb-3 pt-3 font-weight-bold">Log in</h3>
                    </mdb-row>
                    </div>
                    <mdb-card-body class="mx-4 mt-4">
                        <mdb-input label="Your email" v-model="form.email"/>
                        <mdb-input label="Your password" type="password" containerClass="mb-0" v-model="form.password"/>
                        <mdb-row class="d-flex align-items-center mb-4 mt-5">
                            <mdb-col md="12" class="d-flex align-items-start">
                            <div class="text-center">
                                <mdb-btn color="grey" rounded type="button" class="z-depth-1a" @click="SignIn">Log in</mdb-btn>
                            </div>
                            </mdb-col>
                            
                        </mdb-row>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>
    </section>
</template>

<script>
  import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon } from 'mdbvue';
  import { login } from '../../api/user.js';
  import { getToken } from '../../utils/auth';
  export default {
    name: 'FormsPage',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbIcon
    },

    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {

        SignIn()
        {
            
            this.$store.dispatch('user/login', this.form)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        },

        SignUp()
        {
            console.log(getToken());
            //this.$router.push({ name: 'signup' });
        }
    }
  }
</script>
<style scoped>
    .form-gradient
    {
        padding: 50px 0px;
        background-image: url('http://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img%20(11).jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%;
        height: 100vh;
    }
    .form-gradient .font-small
    {
        font-size: 0.8rem;
    }

    .form-gradient .header
    {
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }

    .form-gradient input[type=text]:focus:not([readonly])
    {
        border-bottom: 1px solid #fd9267;
        -webkit-box-shadow: 0 1px 0 0 #fd9267;
        box-shadow: 0 1px 0 0 #fd9267;
    }

    .form-gradient input[type=text]:focus:not([readonly]) + label
    {
        color: #4f4f4f;
    }

    .form-gradient input[type=password]:focus:not([readonly])
    {
        border-bottom: 1px solid #fd9267;
        -webkit-box-shadow: 0 1px 0 0 #fd9267;
        box-shadow: 0 1px 0 0 #fd9267;
    }

    .form-gradient input[type=password]:focus:not([readonly]) + label
    {
        color: #4f4f4f;
    }

    .card
    {
        /* max-width: 450px; */
        background-color: rgba(229,228,255,.2);
        box-shadow: 0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)!important;
    }
</style>
