import { GenreResponseProps as Genre } from '../App'
import { Button } from './Button';

interface SideBarProps {
  genres: Genre[];
  handleChangeMenu: Function;
  selectedGenreId: number;
}

export function SideBar({ genres, handleChangeMenu, selectedGenreId }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleChangeMenu(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}