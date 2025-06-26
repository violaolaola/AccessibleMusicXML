import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';  
import { useState } from 'react';

export default function Index() {
  return (
    <View style={styles.title}>
      <div>
      <h1 style={{"color":`white`}}>Accessible Score Reader</h1>
      <Link href="/about" style={styles.button}>
        How to Use 
      </Link>
      </div>
    </View>
  );
  const FileUploader = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
          setFile(e.target.files[0]);
      }
    }
  };
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'rgba(204, 85, 0, 0.8)',
    display: 'inline-block',
    padding: 30,
    textAlign: 'center',
    
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,  
  },
});
