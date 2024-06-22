import styles from './YoutubeVideo.module.css';

export default function YoutubeVideo({ videoId }) {
    return (
        <div className={styles.video_container}>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}