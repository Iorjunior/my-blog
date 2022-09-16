import type { NextPage } from "next";
import NavBar from "../components/navbar";
import PostTitle from "../components/postTitle";

const Home: NextPage = () => {
  return(
    <>
    <NavBar/>
    <div className="bg-1 h-48"></div>
    <div className="flex flex-col px-2">
      <div className="max-w-[780px] mx-auto mt-8">
        <PostTitle 
        title={'Enviando formularios sem ter um Back-end de forma gratuita '}
        date={'15/09/2022'}
        timeToRead={2}
        />
      </div>
      <div className="max-w-[780px] mt-8 mx-auto prose">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis odio vitae ipsum ullamcorper faucibus. Mauris mattis justo sit amet urna lobortis cursus. Nulla tincidunt, libero a placerat iaculis, orci lorem lacinia erat, pellentesque feugiat velit enim sed est. Etiam facilisis velit augue, at mollis ante faucibus eget. Mauris nulla nulla, sollicitudin ac pretium ac, tincidunt quis ex. Donec dapibus tempor commodo. Integer ante dolor, tempus sed nulla in, ornare bibendum diam. Ut sagittis at massa at sollicitudin. Donec at ex a nisl mollis ullamcorper sed a massa. Vestibulum interdum urna vitae pulvinar aliquet. Quisque sit amet nisl lorem. Sed blandit enim et finibus eleifend. Sed id tellus erat. Sed nec velit sed velit elementum pretium eu et neque. Praesent rhoncus egestas arcu, eu pharetra ex ullamcorper eu.</p>
          <p>In quis sem eget eros condimentum congue non id urna. Suspendisse vel enim imperdiet, bibendum ante a, sollicitudin ante. Nulla in massa turpis. Nullam imperdiet a est non tristique. Vestibulum sollicitudin mattis quam quis dapibus. Aenean nec est tempus, eleifend dui nec, dignissim libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consequat tellus mollis mauris consectetur laoreet. Phasellus suscipit vitae diam vitae scelerisque.</p>
          <h2>Lorem ipsum dolor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis odio vitae ipsum ullamcorper faucibus. Mauris mattis justo sit amet urna lobortis cursus. Nulla tincidunt, libero a placerat iaculis, orci lorem lacinia erat, pellentesque feugiat velit enim sed est. Etiam facilisis velit augue, at mollis ante faucibus eget. Mauris nulla nulla, sollicitudin ac pretium ac, tincidunt quis ex. Donec dapibus tempor commodo. Integer ante dolor, tempus sed nulla in, ornare bibendum diam. Ut sagittis at massa at sollicitudin. Donec at ex a nisl mollis ullamcorper sed a massa. Vestibulum interdum urna vitae pulvinar aliquet. Quisque sit amet nisl lorem. Sed blandit enim et finibus eleifend. Sed id tellus erat. Sed nec velit sed velit elementum pretium eu et neque. Praesent rhoncus egestas arcu, eu pharetra ex ullamcorper eu.</p>
          <p>In quis sem eget eros condimentum congue non id urna. Suspendisse vel enim imperdiet, bibendum ante a, sollicitudin ante. Nulla in massa turpis. Nullam imperdiet a est non tristique. Vestibulum sollicitudin mattis quam quis dapibus. Aenean nec est tempus, eleifend dui nec, dignissim libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consequat tellus mollis mauris consectetur laoreet. Phasellus suscipit vitae diam vitae scelerisque.</p>
          

        </div>
    </div>
    </>
  );
};

export default Home;

