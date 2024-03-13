include(":core")
include(":bugsnag")
include(":bugsnag-ios-link")
include(":common-ios-link")
include(":crashlytics")
include(":crashlytics-ios-link")
include(":sentry-ios-link")

pluginManagement {
    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
        maven("https://oss.sonatype.org/content/repositories/snapshots")
    }
}