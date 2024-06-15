import { LanyardPresence } from '../../types/lanyard';
import { AvatarMask, StatusDnd, StatusIdle, StatusOffline } from './Masks';
import Status from './Status';

export default function Avatar(data: LanyardPresence) {
  return (
    <div role="img" aria-label="avatar" aria-hidden="false" className="w-[92px] h-[92px] border-[6px] relative rounded-full border-zinc-900">
      <svg width="92" height="80" viewBox="0 0 92 80" className="absolute">
        <defs>
          <AvatarMask />
          <StatusOffline />
          <StatusDnd />
          <StatusIdle />
        </defs>
        <foreignObject x="0" y="0" width="80" height="80" mask="url(#avatar-mask)">
          <div className="grid w-full h-full">
            <picture>
              <source srcSet="/images/avatar.webp 1x, /images/avatar.webp 2x, /images/avatar.webp 3x" type="image/webp" />
              <source srcSet="/images/avatar.jpg 1x, /images/avatar.jpg 2x, /images/avatar.jpg 3x" type="image/png" />
              <img src="/images/avatar.webp" alt="avatar" width="80" height="80" aria-hidden="true" draggable="false" className="block" />
            </picture>
          </div>
        </foreignObject>

        {Status(data)}
      </svg>
    </div>
  );
}
