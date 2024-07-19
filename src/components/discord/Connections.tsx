import AnchorIcon from './icons/AnchorIcon';
import GitHubIcon from './icons/GitHubIcon';
import InstagramIcon from './icons/InstagramIcon';
import SpotifyIcon from './icons/SpotifyIcon';
import VerifiedIcon from './icons/VerifiedIcon';
import RiotIcon from './icons/RiotIcon';

export default function Connections() {
  return (
      <div className="flex flex-initial mt-3 flex-col flex-wrap items-stretch">

        {/* instagram */}
        <div className="h-12 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white border border-transparent rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <InstagramIcon />
            <span className="text-md font-semibold text-white">nikos_poimenidis_</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>
          <a href="/instagram"  rel="noopener noreferrer" target="_blank">
            <AnchorIcon />
          </a>
        </div>
        
        {/* GitHub */}
        <div className="h-12 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white border border-transparent rounded">
         <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <GitHubIcon />
            <span className="text-md font-semibold text-normal text-white">NOTHACKERXD</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>
          
          <a href="/github" rel="noopener noreferrer" target="_blank">
            <AnchorIcon />
          </a>
        </div>
        
        {/* Spotify */}
        <div className="h-12 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white border border-transparent rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <SpotifyIcon />
            <span className="text-md font-semibold text-white">Nikos pim</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>
          <a href="/spotify"  rel="noopener noreferrer" target="_blank">
            <AnchorIcon />
          </a>
        </div>

         
        {/* Valorant */}
        {/*
        <div className="h-10 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white bg-zinc-700 rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <RiotIcon />
            <span className="text-md font-semibold text-white">R3FL3X#1337</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>
        </div>
        /*}
        
        {/* Twitter */}
        {/*
        <div className="h-12 mb-2 text-md w-auto relative flex items-center px-4 justify-between text-white border border-transparent rounded">
          <div className="flex-row flex text-center items-center whitespace-nowrap text-ellipsis overflow-hidden space-x-1">
            <TwitterIcon />
            <span className="text-md font-semibold text-white">_daglaroglou_</span>
            <div className="w-[16px] h-[16px]">
              <VerifiedIcon />
            </div>
          </div>
          <a href="/twitter">
            <AnchorIcon />
          </a>
        </div>
        */}
      </div>
  );
}
