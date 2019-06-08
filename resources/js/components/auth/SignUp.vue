<template>
    <section class="form-gradient">
        <mdb-row class="justify-content-center">
            <mdb-col md="4">
                <mdb-card>
                    <div class="header pt-3 blue-gradient">
                    <mdb-row class="d-flex justify-content-center">
                        <h3 class="white-text mb-3 pt-3 font-weight-bold">Sign up</h3>
                    </mdb-row>
                    </div>
                    <mdb-card-body class="mx-4 mt-4">
                        <div class="grey-text">
                            <mdb-input label="Your name" icon="user" type="text"/>
                            <mdb-input label="Your email" icon="envelope" type="email"/>
                            <mdb-input label="Confirm your email" icon="exclamation-triangle" type="text"/>
                            <mdb-input label="Your password" icon="lock" type="password"/>
                            </div>
                            <div class="text-center">
                            <mdb-btn color="primary">Register</mdb-btn>
                        </div>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>
    </section>
</template>

<script>
  import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon } from 'mdbvue';
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
    }
  }
</script>
<style>
    .form-gradient
    {
        padding: 50px 0px;
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
    }
</style>
