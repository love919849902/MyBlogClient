<template>
    <div class="container">
        <nav class="navbar navbar-light bg-faded rounded navbar-toggleable-md">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">Navbar</a>

                <div class="collapse navbar-collapse" id="containerNavbar">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">Dropdown</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown04">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-md-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
        </nav>
        <div class="content">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>标题</th>
                        <th>简介</th>
                        <th>来源</th>
                        <th>媒体</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,key) in list">
                        <th scope="row">{{key+1}}</th>
                        <td>{{item.title}}</td>
                        <td>{{item.summary}}</td>
                        <td>{{item.intro}}</td>
                        <td>{{item.media_name}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import $ from 'jquery'
    export default {
        data() {
            return {
                list: []
            }
        },
        created() {
            $.ajax({
                type: "get",
                url: 'http://feed.mix.sina.com.cn/api/roll/get?pageid=1&lid=21&num=5&page=1&encode=utf-8&_=1478745737376',
                dataType: "jsonp",
                success: (data) => {
                    console.log(data);
                    this.list = data.result.data;
                },
                error: function (err) {
                    console.log(err);
                }
            });
            // debugger;
            // axios.get('http://feed.mix.sina.com.cn/api/roll/get?pageid=1&lid=21&num=5&page=1&encode=utf-8&_=1478745737376', { mode: 'cores' }).then(function (body) {
            //     console.log(body)
            //     debugger;
            // }).catch(function (error) {
            //     debugger;
            //     console.log(error);
            // });
        }
    }

</script>