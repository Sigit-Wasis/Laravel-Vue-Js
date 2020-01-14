# Laravel Vue-Js
Fundamental Vue Js &amp; Implementation with Laravel 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" height="40" width="48">
<img src="https://vuejs.org/images/logo.png" height="40" width="48">

## Learning Stages

- <b>Vue Js: Install & Say Hello</b>
  Vue.js adalah kerangka kerja JavaScript progresif yang bersumber terbuka untuk membangun antarmuka pengguna.

- <b>Vue Js: Data Binding</b>
  Data Binding adalah teknik yang digunakan untuk melakukan binding (mengikat) data antara model dan view yang disinkronkan setiap terjadi perubahan data dan dilakukan dengan directive v-model.

- <b>Vue Js: Mengenal Directive</b>
  Directive layaknya atribut pada HTML, yang digunakan untuk memberitahu library untuk memanipulasi DOM element. Directive memiliki ciri yakni dimulai dengan prefix v- dan value dari directive digunakan untuk melakukan binding expressions. Tugas directive adalah memberikan instruksi ke DOM untuk melakukan sesuatu saat value expression berubah. Terdapat banyak Directive diantaranya: v-show, v-if & v-else, v-for. Directive v-for dapat digunakan pada data berbentuk array / object.

- <b>Vue Js: Event Listener</b>
  Event pada javascript akan membuat web kita menjadi lebih interaktif dimana akan melakukan suatu respon/aksi berdasarkan event yang telah ditentukan yang akan memicu jalannya script Javascript yang ada di dalam web tersebut. Dengan VueJS, ketika kita akan bekerja dengan event maka dapat menggunakan directive v-on lalu diikuti dengan jenis event yang akan digunakan, misal: v-on:click, v-on:submit, v-on:keyup, dll. File pembahasan di Fundamental_Vue dengan nama [event_listener.html](https://github.com/Sigit-Wasis/Laravel-Vue-Js/blob/master/Fundamental_Vue/event_listener.html).

- <b>Vue Js: Computed Properties</b>
  Inline expression didalam Vue.js sangat mudah dan menjadi pilihan yang dapat digunakan untuk case yang sederhana, akan tetapi untuk case yang memiliki logika yang rumit sebaiknya menggunakan computed properties. Perbedaan antara Computed Properties dengan Methods, Jika Computed Properties tidak mengalami perubahan maka operasinya tidak akan di jalankan kembali, sedangkah Methods setiap kali ada perubahan maka akan menjalankan kembali fungsinya. File pembahasan di Fundamental_Vue dengan nama [computed_properties.html](https://github.com/Sigit-Wasis/Laravel-Vue-Js/blob/master/Fundamental_Vue/computed_properties.html).

- <b>Vue Js: Make a Component</b>
  Component adalah salah satu fitur yang powerful dari Vue.js, anda dapat membuat sebuah component yang berisi elemen HTML yang dapat digunakan kembali (reusable) tanpa perlu menuliskan kembali elemen tersebut. dan memudahkan untuk maintenance code yang telah kita tulis. Mendaftarkan component dengan menggunakan Vue.component(). menggunakan props membuat content yang dimiliki lebih dinamis.

- <b>Vue Js: Dynamic Component</b>
  Dynamic component pada Vue.js memungkin anda untuk menentukan mounting point dimana anda dapat beralih secara dinamis antar component dalam aplikasi anda. Pada tahap awal, kita akan mencoba membuat dynamic component, menggunakan parameter keep-alive, dan memberikan efek transitions saat user beralih diantara keduanya.

- <b>Vue Js: Ajax Request Menggunakan Axios</b>
  Ajax Request Menggunakan Axios (axios hanya third party atau library untuk malakukan suatu request. Axios itu sama seperti jquery ($.ajax, $.get, $.post), atau vue-resourse) untuk berkomunikasi dengan banckend dalam menciptakan website yang interaktif. dengan menggunakan teknologi ajax maka untuk berinteraksi dengan backend dalam melakukan pertukaran data akan lebih mudah dan tanpa mereload halaman website secara keseluruhan.

- <b>Vue Js: Filtering & Formatting Vue Js</b>
  Adapun point of content dari filtering dan formatting adalah 
  File pembahasan di Fundamental_Vue dengan nama [filtering.html](https://github.com/Sigit-Wasis/Laravel-Vue-Js/blob/master/Fundamental_Vue/filtering.html).
  1. Filtering List with a computed property
  2. Formatting Currencies With Filter
     Untuk mempermudah pembacaan angka maka membuat format currencies dengan menggunakan library accouting.min.js
     dalam library ini ada yang berfungsi untuk membuat currencies pada <i>Date dan Money</i>.
  3. Formatting Date
     Di dalam database dikenali dengan format yyyy-mm-dd sedangkan di indonesia format tanggal yang umumnya digunakan adalah dd-mm-yyyy.
     untuk melakukan formating date menggunakan library bantuan dengan <i>moment.js</i>

- <b>Vue Js: Simple Validation with Vuejs</b>
  Garis besar dari topik ini adalah Dynamic form, Validate Form, Adding style conditionally, Reset Form.
  File pembahasan di Fundamental_Vue dengan nama [validation.html](https://github.com/Sigit-Wasis/Laravel-Vue-Js/blob/master/Fundamental_Vue/validation.html).
  1. Dynamic form adalah membuat form login & form registration hingga tahap validasi. Pembahasan disini hanya sampai tahap validasi client side.
  2. Validate form, Ada dua jenis validasi yang akan diangkat dalam artikel ini, pertama form tidak boleh kosong dan kedua inputan yang berupa email, harus memasukkan format email. Karena menggunakan Bootstrap, maka sebagai feedback error-nya akan menggunakan class is-invalid.
  3. Adding style conditionally adalah memberika style kepada form ketika tidak memenuhi kriteria yang ditetapkan dengan memberika class binding pada form.
  4. Reset Form adalah digunakan untuk menghapus value dari form ketika berpindah form. dengan menambahkan method di vuejs.
  
- <b>Vue Js: Menggunakan Component di Vue Js</b>
  Point of content yang di bahas adalah tentang creating & registration Component, make form validation, berkomunikasi dengan component.
  File pembahasan di Fundamental_Vue dengan nama [components3.html](https://github.com/Sigit-Wasis/Laravel-Vue-Js/blob/master/Fundamental_Vue/components3.html).

- <b>Vue Js: Multiple Instance dan Cara Berkomunikasi Vue Js</b>
  Adapun case yang akan diangkat adalah sebuah form sederhana untuk menginput data yang kemudian ditampilkan pada table yang berada pada sisi lainnya, dimana masing-masing bagian ini menggunakan instance yang berbeda. File pembahasan di Fundamental_Vue dengan nama [multiple_instance.html](https://github.com/Sigit-Wasis/Laravel-Vue-Js/blob/master/Fundamental_Vue/multiple_instance.html).

- <b>Vue Js: Tutorial Vuex #1 Manajemen State</b>
  Vuex adalah library Vue js yang digunakan untuk menghandle state (state managemen). dimna data yang sudah anda pusatkan maka bisa digunakan oleh semua component yang ada. Interaksi antar components agar dapat saling bertukar data adalah dengan props, maka dengan vuex kita menggunakan state.

  Ada beberapa konsep inti dari vuex, yaitu :
    State => untuk menampung data murni.
    Getters => untuk melakukan penyaringan/manipulasi/pengurutan data.
    Mutation => untuk melakukan pengolahan data.
    Actions => sama seperti mutations, akan tetapi actions dapat asynchronous.

- <b>Vue Js: Tutorial Vuex #2 Mutations and Actions
  Mutations dan Actions untuk mengelola dan melakukan perubahan data pada state. Mutations bertugas untuk mengkonfirmasi setiap perubahan pada state sedangkan Actions bertugas untuk memberikan perintah terhadap apa yang akan dilakukan.
  Bagian terpenting dalam Vuex adalah state, mutations, dan actions ini merupakan peranan dalam mengelola data menggunakan vuex.
  File pembahasan di Vuex dengan nama [Tutorial-vuex-vuejs](https://github.com/Sigit-Wasis/Laravel-Vue-Js/blob/master/tutorial-vuex-vuejs).

- <b>Vue Js: Tutorial Vuex #3 Module & Helpers
  Module dan Helpers memungkinkan kita untuk memecah bagian dari aplikasi kita agar dapat di handle dengan mudah. Sebab apabila di gabungkan dengan satu file maka akan bertumpuk banyak dan akan susah untuk di maintenance di kemudian hari.
  
## Referensi
Referensi pembelajaran dari: https://daengweb.id/ & https://vuejs.org/ 