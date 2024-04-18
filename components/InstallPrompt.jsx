'use client'
import styles from './InstallPrompt.module.css';
import { useEffect, useState } from 'react';
import { HiDownload } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { useInstalledDate } from './Provider/InstalledDateProvider';

export default function InstallPrompt() {
    const [installPrompt, setInstallPrompt] = useState(null);
    const [installDate, setInstallDate] = useInstalledDate();

    const currentDate = Math.floor(Date.now() / 1000); //retourne la date sous forme epoch en secondes

    useEffect(() => {
        const getInstallPrompt = (event) => {
            event.preventDefault();
            setInstallPrompt(event);
        }

        window.addEventListener('beforeinstallprompt', getInstallPrompt);

        // Cleanup
        return () => {
            window.removeEventListener('beforeinstallprompt', getInstallPrompt);
        }
    }, [setInstallPrompt]);

    const handleClose = () => {
        setInstallPrompt(null);
        setInstallDate(currentDate); //reinitialisation pour afficher le InstallPrompt
    };

    const handleInstall = async () => {
        installPrompt.prompt();
        const { outcome } = await installPrompt.userChoice;
        if (outcome === 'accepted') {
            setInstallPrompt(null);
        }
    }

    return installPrompt && (currentDate - installDate) >= 300 &&
        <div className={styles.banniere}>
            <div>
                <span onClick={handleInstall}>
                    <HiDownload />
                    Cliquez pour installer l&apos;application!
                </span>
            </div>
            <span onClick={handleClose}>
                <IoIosCloseCircle />
            </span>
        </div>
}