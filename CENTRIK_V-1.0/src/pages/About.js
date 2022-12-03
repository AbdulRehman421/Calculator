import React from "react";

const About = () => {
    return (
        <section class="container mx-auto px-6 p-10 text-center">
            <h2 class="text-4xl font-bold  text-gray-300 mb-8">About US</h2>
            <div class="items-center mb-20">
                <h4 class="text-3xl text-gray-300 font-bold mb-3">Vision</h4>
                <p class="text-gray-300 mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                    ipsum odio atque soluta eius excepturi repudiandae dolores, fuga dicta
                    ut voluptatibus quam delectus, optio, tenetur ipsam quisquam dolorum
                    molestiae. Officiis enim officia voluptate cumque earum deserunt?
                    Labore exercitationem, alias eaque voluptas tempora doloremque tenetur
                    dolorem, debitis ipsa optio maiores rerum.
                </p>
            </div>

            <div class=" flex-wrap mb-20">
                {/* <div class="w-full md:w-1/2"> */}
                <h4 class="text-3xl text-gray-300 font-bold mb-3">Mission</h4>
                <p class="text-gray-300 mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
                    expedita vero laboriosam sunt accusantium qui eum deleniti quibusdam,
                    excepturi dolores cumque dicta sequi impedit velit est tenetur. Modi
                    esse consectetur est sapiente dolorem facere sunt fugiat veniam
                    corporis odio! Esse suscipit officiis impedit veritatis doloribus
                    facilis quos exercitationem culpa libero!
                </p>
                {/* </div> */}
            </div>

            <div class=" text-center b-20">
                <h4 class="text-3xl text-gray-300 font-bold mb-3"> Activities </h4>
                <p class="text-gray-300 mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam
                    praesentium eveniet iste delectus maiores tempore dolor ipsa quis.
                    Enim reiciendis quasi facilis beatae, quaerat commodi eligendi
                    molestias perferendis voluptate id nobis qui aliquid recusandae, quis
                    ratione, vero iure vitae labore dicta ea totam odio. Rerum quia
                    impedit necessitatibus qui?
                </p>
            </div>
        </section>
    );
};

export default About;
