use std::any::type_name;

use env_logger;
use grpc::proto::v1::kv_service_client::KvServiceClient;
use grpc::proto::v1::{GetRequest, PutRequest};
use log;

fn type_of<T>(_: T) -> &'static str {
    type_name::<T>()
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    env_logger::init();

    let channel = tonic::transport::Channel::from_static("http://0.0.0.0:5001")
        .connect()
        .await?;

    println!("channel established");

    let mut client = KvServiceClient::new(channel);

    let put_request = tonic::Request::new(PutRequest {
        key: "foo".to_string(),
        value: "bar".as_bytes().to_vec(),
    });

    let put_response = client.put(put_request).await?.into_inner();

    // log that we got something back.
    let empty = type_of(put_response);
    println!("put response: {}", empty);

    let get_request = tonic::Request::new(GetRequest {
        key: "foo".to_string(),
    });

    let get_response = client.get(get_request).await?.into_inner();

    // log that we got something back.
    let val = String::from_utf8(get_response.value).unwrap();
    println!("get response: {}", val);

    Ok(())
}
