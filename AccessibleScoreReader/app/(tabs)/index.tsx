import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { Link } from 'expo-router'; 
import * as DocumentPicker from 'expo-document-picker';
import React, { useState } from 'react';

export default function Index() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [scoreMetadata, setScoreMetadata] = useState('');

  const handleFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*',
      copyToCacheDirectory: true,
      multiple: false,
    });

    console.log('Picked file:', result.name, result.mimeType);

    const isMusicXML =
      result.type === 'success' &&
      (
        result.name?.toLowerCase().endsWith('.xml') ||
        result.name?.toLowerCase().endsWith('.musicxml') ||
        result.name?.toLowerCase().endsWith('.mxl') ||
        result.mimeType === 'application/vnd.recordare.musicxml' ||
        result.mimeType === 'application/vnd.recordare.musicxml+xml' ||
        result.mimeType === 'application/vnd.recordare.musicxml.zip' ||
        result.mimeType === 'application/xml' ||
        result.mimeType === 'text/xml'
      );

    if (isMusicXML) {
      console.log('Accepted MusicXML file:', result.name);
      setSelectedFile(result);
      setUploadStatus('Score uploaded.');
    } else {
      console.log('Invalid file type selected');
      setUploadStatus('Invalid file type. Please upload a .xml, .musicxml, or .mxl file.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>

      <Link href="/about" asChild>
        <Pressable>
          <Text style={styles.button}>Go to About screen</Text>
        </Pressable>
      </Link>

      <View style={{ marginTop: 20 }}>
        <Button title="Choose File" onPress={handleFile} />
      </View>

      {selectedFile && (
        <Text style={{ color: 'white', marginTop: 10 }}>
          Selected: {selectedFile.name}
        </Text>
      )}

      {uploadStatus !== '' && (
        <Text style={{ color: 'white', marginTop: 10 }}>{uploadStatus}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
