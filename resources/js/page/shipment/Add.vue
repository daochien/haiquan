<template>
    <div class="add-shipment-component">
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Add Shipment</h6>
                    </div>
                    <div class="card-body">
                        <form class="form-horizontal">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <label for="name">Customer <span style="color:red;">*</span></label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                    <option value="" disabled selected>Customer</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <label for="name">Reference number</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">RN</div>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Reference number">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <label for="name">Pickup<span style="color:red;">*</span></label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Enter your address">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <label for="name">Delivery<span style="color:red;">*</span></label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Enter your address">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <label for="name">Direction</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Direction">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <label for="name">Currency </label>
                                            <div class="input-group">
                                                <select class="form-control">
                                                    <option value="" disabled selected>-- Currency --</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <label for="name">Person of contact<span style="color:red;">*</span></label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Person of contact">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-10 margin-top100" >
                                        <div class="form-group">
                                            <label for="name">ETD<span style="color:red;">*</span></label>
                                            <div class="input-group">
                                                <datepicker
                                                placeholder="ETD"
                                                :format="'dd/MM/yyyy'"
                                                :wrapper-class="'width100'"
                                                :input-class="'form-control'"
                                                :highlighted="date.highlighted"></datepicker>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <label for="name">ETA<span style="color:red;">*</span></label>
                                            <div class="input-group">
                                                <datepicker
                                                placeholder="ETA"
                                                :format="'dd/MM/yyyy'"
                                                :wrapper-class="'width100'"
                                                :input-class="'form-control'"
                                                :highlighted="date.highlighted"></datepicker>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <label for="name">Incoterms</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Incoterms">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="form-group">
                                            <label for="name">Reference number</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text">VND / VND</div>
                                                </div>
                                                <input type="text" class="form-control" placeholder="1" disabled>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <!--Sub shipment-->
                        <br>
                        <div class="row justify-content-center">
                            <div class="col-md-10" >
                                <table class="table table-bordered">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">TRANSPORT</th>
                                            <th scope="col">TIME</th>
                                            <th scope="col">PICKUP DELIVERY</th>
                                            <th scope="col">SEGMENTS</th>
                                            <th scope="col">COST AND CHARGE</th>
                                            <th scope="col">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-1">

                            </div>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
export default {
    name: 'AddShipment',
    components: {
        Datepicker
    },
    data() {
        return {
            date: {
                highlighted: {
                    dates: [
                        new Date()
                    ]
                }
            }
        }
    }
}
</script>
<style scoped>
table
{
    font-size: 12px;
}
.margin-top100
{
    margin-top: 100px;
}
.width100
{
    width: 100%;
}
</style>

