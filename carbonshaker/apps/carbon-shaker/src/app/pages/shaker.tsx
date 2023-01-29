import styles from './shaker.module.scss';
import {useEffect, useRef, useState} from "react";
import {fetchProduct} from "../api/food-api";
import {OpenFoodproduct} from "../model/food-model";
import Product from "../components/product";

export function Shaker() {
  const [barcode, setBarcode] = useState('');
  const [product, setProduct] = useState<OpenFoodproduct | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const streamWebcam = async () => {
      const webcamSrc = await navigator.mediaDevices.getUserMedia({
        video: {facingMode: "environment"}
      });
        let videoElement = videoRef.current;
      if (videoElement) {
        videoElement.srcObject = webcamSrc;
        videoElement.autoplay = true;
      }
  }

  useEffect( () => {
    // @ts-ignore
    const detector = new BarcodeDetector();
    streamWebcam().catch(error => {
      console.log(error);
    });
    setInterval(async () => {
      const result = await detector.detect(videoRef.current).catch((e:Error) => {});
      if(result?.length && result[0] && result[0].rawValue) {
        setBarcode(result[0].rawValue);
      }
    }, 1000)
    return (() => {});
  }, [])

  useEffect( () => {
    if (barcode) {
      fetchProduct(barcode)
        .then((p) => setProduct(p))
        .catch(e => {console.error('Error fetching product', e)});
    }
  }, [barcode])

  return (
    <>
      <div>
        <video id="video" ref={videoRef} width="300" className={styles.video}></video>
        <div>
          <code>{`${barcode}`}</code>
        </div>
        {
          product && <Product product={product} />
        }
      </div>
    </>
  )
}

export default Shaker;
