
        
        const end = {
            last: "Copyright &copy; Marseliya"
            // prg1: "Shopee Indonesia - Jual Beli Online",
            // prg2: "Shopee adalah mobile-platform pertama di Asia Tenggara (Indonesia, Filipina, Malaysia, Singapura, Thailand, Vietnam) dan Taiwan yang menawarkan transaksi jual beli online yang menyenangkan, gratis, dan terpercaya via ponsel. Bergabunglah dengan jutaan pengguna lainnya dengan mulai mendaftarkan produk jualan dan berbelanja berbagai penawaran menarik kapan saja, di mana saja. Keamanan transaksi kamu terjamin.. Ayo gabung dalam komunitas Shopee dan mulai belanja sekarang!",
            // prg3: "Belanja Online Terpercaya di Shopee",
            // prg4: "Temukan apapun kebutuhanmu dengan harga terbaik cuma di Shopee. Shopee adalah pusat perbelanjaan online di mana kamu bisa mendapatkan update terkini dari penjual yang kamu ikuti, sekaligus dari pengguna favorit kamu. Berbelanja dan berjualan menjadi lebih menyenangkan dengan fitur bagikan ke media sosial, di mana kamu bisa menyebarkan produk yang kamu jual atau pun barang favorit kamu hanya dengan satu klik saja Belanja semua kebutuhanmu di Shopee dengan hati yang tenang! Cek rating dan review toko-toko yang ada dan temukan penjual yang terpercaya dengan mudah. Kami selalu mengutamakan keamanan transaksi untuk para pembeli kami! Sebagai salah satu e-commerce terbesar di Asia Tenggara, Shopee pun senantiasa memberikan penawaran-penawaran yang menguntungkan bagi pengguna. Hampir setiap bulan, Shopee selalu mengadakan kampanye promo yang penuh dengan keuntungan spesial. Setiap saat, selalu ada promo spesial yang menunggu, mulai dari ShopeePay Day, ShopeePay Mantul Sale, Ibu Serbu, hingga promosi bulanan yang selalu ditunggu-tunggu seperti promo Big Ramadhan Sale, 9.9 Super Shopping Day, 10.10 Brands Festival,11.11 Big Sale, dan yang terbesar sepanjang tahun, 12.12 Harbolnas, dan ShopeePay 12.12 Birthday Deals Tidak yakin apa yang ingin kamu beli? Fitur hashtag dapat membantumu menemukan tren produk terkini. Jelajahi berbagai kategori produk, seperti Kemeja Pria, Perlengkapan Rumah, Tas Selempang Pria, Hobi & Koleksi, Makanan & Minuman, Pakaian Wanita, Fashion Anak, Clutch Tas Wanita, Kosmetik, Otomotif, Handphone & Aksesoris, Ibu & Bayi, Jam Tangan Analog, Kamera Mirrorless, Souvenir & Pesta, Perawatan & Kesehatan, Sepatu Pria, Aksesoris Fashion, Fashion Muslim, Serba Serbi, Komputer & Aksesoris, Sepatu Wanita, Elektronik, Perlengkapan Olahraga, Voucher, dan masih banyak lagi! Gunakan fitur Pencarian atau Rekomendasi untuk menemukan produk yang paling sesuai dengan keinginanmu secara instan. Berbelanja menjadi semakin hemat dengan voucher dan cashback di Shopee. Ayo mulai belanja di Shopee sekarang!",


        }
        
        function displayEndCard(end){
            let div = document.querySelector(".footer");

            let h5 = document.createElement("h5");
            h5.textContent = end.last;
            div.appendChild(h5);

            // for (let i = 0; i <= 10; i++) {
            //     const p = document.createElement("p");
            //     p.textContent = pilih[`fg${i}`];
            //     figcaption.appendChild(p);
            //     for(let m = 0; i > m; m++){
            //         p.style.cssText="width: 75px; margin-right: 55px;";
            //     }
            // }

            // for (let c = 0; c < 5; c++){
            //     k
            // }
            
            // let h5 = document.createElement("h5");
            // h5.textContent = end.prg1;
            // div.appendChild(h5);

            // let h6 = document.createElement("h6");
            // h6.textContent = end.prg2;
            // div.appendChild(h6);

            // let h5 = document.createElement("h5");
            // h5.textContent = end.prg1;
            // div.appendChild(h5);

            // let h5 = document.createElement("h5");
            // h5.textContent = end.prg1;
            // div.appendChild(h5);
        }
        
        displayEndCard(end);
        
        
        ////////////////

        const pilih = {
            ktgr: "KATEGORI",
            elektronik: "https://actu.meilleurmobile.com/wp-content/uploads/2016/03/ADSL-TV.jpg",
            fg1: "Elektronik",
            komputer: "https://th.bing.com/th/id/OIP.bH5JTgQRtlti-uWUEpQ4GAHaFj?w=253&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            fg2: "Komputer & Aksesoris",
            hp: "https://th.bing.com/th/id/OIP.gh2hisuuzuLhWWOy1HOHngHaJc?rs=1&pid=ImgDetMain",
            fg3: "Handphone & Aksesori",
            kaos: "https://s0.bukalapak.com/img/0247303591/w-1000/Kaos_Polos_Warna_Putih.png",
            fg4: "Pakaian",
            sepatu: "https://down-id.img.susercontent.com/file/ffc34dd64315240cd8b02c00401939e4",
            fg5: "Sepatu Sneakers",
            tas: "https://s.kaskus.id/images/2022/02/04/11076083_202202040936010684.jpg",
            fg6: "TasSekolah",
            glasses: "https://th.bing.com/th/id/OIP.9qzye2lBk3Z37Pvrm33JRQHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            fg7: "Aksesoris & Fashion",
            watch: "https://th.bing.com/th/id/OIP.-HIun-IavVsBIkFMaPTf1gHaHa?rs=1&pid=ImgDetMain",
            fg8: "Jam Tangan",
            obat: "https://th.bing.com/th/id/OIP.XhbgPGZKLB2PvhJpLZ0tDAHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1,3",
            fg9: "Kesehatan",
            gitar: "https://cf.shopee.co.id/file/8b5d3eb37bb20e64025dfe4946695ffe",
            fg10: "Hobi & Koleksi"
        }

        function card(pilih){
            let nav = document.querySelector(".navi");
            let figure = document.createElement("figure");
            let figcaption = document.createElement("figcaption");

            let h5 = document.createElement("h5");
            h5.textContent = pilih.ktgr;
            nav.appendChild(h5);

            let container = document.createElement("images");
            container.style.cssText="display: flex; width: 60px; margin: 20px";

            function addImage(src){
                let img = document.createElement("img");
                img.src = src;
                img.style.cssText = "width: 60px; height: auto; margin-top: 0px; margin-right: 35px; cursor: pointer";
                container.appendChild(img);
            }

            addImage(pilih.elektronik);
            addImage(pilih.komputer);
            addImage(pilih.hp);
            addImage(pilih.kaos);
            addImage(pilih.sepatu);
            addImage(pilih.tas);
            addImage(pilih.glasses);
            addImage(pilih.watch);
            addImage(pilih.obat);
            addImage(pilih.gitar);
            figure.appendChild(container);

            for (let i = 0; i <= 10; i++) {
                const p = document.createElement("p");
                p.textContent = pilih[`fg${i}`];
                figcaption.appendChild(p);
                for(let m = 0; i > m; m++){
                    p.style.cssText="width: 75px; margin-right: 55px;";
                }
            }
            
            figure.appendChild(figcaption);
            nav.appendChild(figure);
        }

        card(pilih);

        ////////////////////////////



        const title = {
            seller: "Seller Centre | Mulai Berjualan | Download | Ikuti kami di",
            imagee: [
                "https://th.bing.com/th/id/OIP.tofC9LPVw4OAiUgZgC36vAHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                "https://th.bing.com/th?q=Instagram+Logo+SVG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-ID&cc=ID&setlang=id&adlt=strict&t=1&mw=247",
                "https://th.bing.com/th/id/OIP.736clN3y7GjxnDVFVrPhLwAAAA?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            ],
            Notif: "Notifikasi",
            Help: "Bantuan",
            lang: "Bahasa Indonesia",
            daf: "Daftar | Login",
            logo: "https://th.bing.com/th/id/OIP.rbLs_qfFvdFdWAFaSRAFJQHaE8?w=600&h=400&rs=1&pid=ImgDetMain",
            cart: "https://th.bing.com/th?id=OIP.499P_8SQxEnpb7CDkENm7gHaER&w=328&h=190&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        };

        function createHeaderCard(title) {
            let content2Top = document.querySelector(".content2-top");

            let h5 = document.createElement("h5");
            h5.textContent = title.seller;
            content2Top.appendChild(h5);

            title.imagee.forEach((src) => {
                let img = document.createElement("img");
                img.src = src;
                content2Top.appendChild(img);
                img.addEventListener("click", () => alert('Ikuti kami disini!'));
            });

            let h6 = document.createElement("h6");
            h6.textContent = title.Notif;
            content2Top.appendChild(h6);
            h6.addEventListener("click", () => alert('Tidak ada notifikasi'));
            h6.style.cursor = "pointer";
            
            let h7 = document.createElement("h7");
            h7.textContent = title.Help;
            content2Top.appendChild(h7);

            let h8 = document.createElement("h8");
            h8.textContent = title.lang;
            content2Top.appendChild(h8);

            let h9 = document.createElement("h9");
            h9.textContent = title.daf;
            content2Top.appendChild(h9);

            let img = document.querySelector(".logo");
            img.src = title.logo;

        }

        createHeaderCard(title);



        // ////////////////////////////



        const products = [
            {
                name: "JAM TANGAN PRIA ANTI AIR",
                image: "https://cdn.idntimes.com/content-images/community/2023/01/screenshot-2023-01-22-10-03-36-822-edit-comshopeeid-75518cf7651a87340b376c775dc61640-fd608e56d69e039de8194339463c55d6.jpg",
                price: "Rp. 100.000",
                desc: [
                    "cod",
                    "bebas pengembalian"
                ]
            },
            {
                name: "DOMPET WANITA DOVE MINI KOREAN",
                image: "https://blogunik.com/wp-content/uploads/2018/10/dompet-wanita-terbaru.jpg",
                price: "Rp. 10.000",
                desc: [
                    "gratis ongkir",
                    "hemat"
                ]
            },
            {
                name: "kaos polo shirt logo lengan pendek",
                image: "https://s1.bukalapak.com/img/666285103/w-1000/kaos_polo_shirt_polos_hitam.jpg",
                price: "Rp. 36.000",
                desc: [
                    "cod",
                    "bebas pengembalian"
                ]
            },
            {
                name: "BUY 1 GET 4 Parfum MR CRUSH",
                image: "https://down-id.img.susercontent.com/file/id-11134207-7qul1-lfmlpnrc230u91",
                price: "Rp. 80.000",
                desc: [
                    "gratis ongkir",
                    "hemat"
                ]
            },
            {
                name: "Sweater [COD] Sweater Hoodie Pria ",
                image: "https://s3.bukalapak.com/img/8566371547/w-1000/Jaket_Pria_Hoodie_Cowok_Pakaian_Pria_Sweater_Hoodie_KYEDID_F.jpg",
                price: "Rp. 110.000",
                desc: [
                    "cod",
                    "bebas pengembalian"
                ]
            },
            {
                name: "[100% ORIGINAL] Airpods Pro Wireless",
                image: "https://th.bing.com/th/id/OIP.WmrDAbmUFGD_R8LbuO5nRQHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                price: "Rp. 269.000",
                desc: [
                    "gratis ongkir",
                    "hemat"
                ]
            },
            {
                name: "TAS RANSEL PRIA TERBARU KEREN",
                image: "https://th.bing.com/th/id/OIP.nu_hhmuna10uumAgJ7kJggHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                price: "Rp. 100.000",
                desc: [
                    "cod",
                    "bebas pengembalian"
                ]
            },
            {
                name: "Pashmina Kaos Jersey || Hijab Jersey || Hijab",
                image: "https://th.bing.com/th/id/OIP.MqQHFT4Cn4FRIvBCB7mLhAHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                price: "Rp. 21.000",
                desc: [
                    "gratis ongkir",
                    "hemat"
                ]
            },
            {
                name: "BRONSON VITAMIN D3 K2 5000 IU 1000",
                image: "https://th.bing.com/th/id/OIP.lUa0H2z_U_FD-WUXur8p4QHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                price: "Rp. 80.000",
                desc: [
                    "cod",
                    "bebas pengembalian"
                ]
            },
            {
                name: "HER Lip Glow Lip Gloss Glitter Lipstik Liquid",
                image: "https://th.bing.com/th/id/OIP.SR2PXJKS-Hu8epjXq4eCEwHaHa?rs=1&pid=ImgDetMain",
                price: "Rp. 12.999",
                desc: [
                    "gratis ongkir",
                    "hemat"
                ]
            },
            {
                name: "SANDAL WANITA REMAJA EMPUK ORI",
                image: "https://www.bing.com/th?id=OIP.-5r8xJWO2NNvfAyCG0sx5wAAAA&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                price: "Rp. 46.600",
                desc: [
                    "cod",
                    "bebas pengembalian"
                ]
            },
            {
                name: "Emina Sunbattle Sunscreen 50spf",
                image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-llaokbxocr6za5",
                price: "Rp. 23.999",
                desc: [
                    "gratis ongkir",
                    "hemat"
                ]
            }
        ];

        function createProductCard(product) {
            let content = document.querySelector(".content");
            let figure = document.createElement("figure");
            let figcaption = document.createElement("figcaption");
            let img = document.createElement("img");
            img.src = product.image;
            let h1 = document.createElement("h1");
            h1.textContent = product.name;
            let h2 = document.createElement("h2");
            h2.textContent = product.price;
            let ul = document.createElement("ul");
            product.desc.map((d) => {
                let li = document.createElement('li');
                li.textContent = d;
                ul.appendChild(li);
            });
            let like = document.createElement('button');
            like.addEventListener("click", () => alert('anda menyukai produk ini'));
            like.textContent = "like";
            like.style.fontSize = "9px";
            let buy = document.createElement('button');
            buy.addEventListener("click", () => confirm('anda yakin membeli produk ini?'));
            buy.textContent = "buy";
            buy.style.fontSize = "9px";
            let comment = document.createElement('button');
            comment.addEventListener("click", () => prompt(''));
            comment.textContent = "comment";
            comment.style.fontSize = "9px";
            figcaption.appendChild(h1);
            figcaption.appendChild(ul);
            figcaption.appendChild(h2);
            figcaption.appendChild(like);
            figcaption.appendChild(buy);
            figcaption.appendChild(comment);
            figure.appendChild(img);
            figure.appendChild(figcaption);
            content.appendChild(figure);
        }

        products.map((product) => {
            createProductCard(product);
        });

